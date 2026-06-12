import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../../core/constants/emailjs.config';
import { profile } from '../../../core/constants/site-data';
import { MagneticButton } from '../../../shared/components/magnetic-button/magnetic-button';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

type ContactStatus = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SectionTitle, MagneticButton, RevealOnScrollDirective],
  templateUrl: './contact.html',
})
export class Contact {
  readonly profile = profile;

  form = {
    name: '',
    email: '',
    message: '',
  };

  isSending = false;
  statusMessage = '';
  status: ContactStatus = 'idle';

  async sendMessage(): Promise<void> {
    if (this.isSending) {
      return;
    }

    this.isSending = true;
    this.statusMessage = '';
    this.status = 'idle';

    const templateParams = {
      name: this.form.name.trim(),
      email: this.form.email.trim(),
      from_name: this.form.name.trim(),
      from_email: this.form.email.trim(),
      reply_to: this.form.email.trim(),
      to_name: this.form.name.trim(),
      to_email: this.form.email.trim(),
      owner_name: this.profile.name,
      owner_email: this.profile.email,
      message: this.form.message.trim(),
    };

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        {
          publicKey: emailjsConfig.publicKey,
        },
      );

      if (emailjsConfig.autoReplyTemplateId) {
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.autoReplyTemplateId,
          templateParams,
          {
            publicKey: emailjsConfig.publicKey,
          },
        );
      }

      this.status = 'success';
      this.statusMessage = 'Message sent successfully.';
      this.form = { name: '', email: '', message: '' };
    } catch (error) {
      console.error('EmailJS send failed:', error);
      this.status = 'error';
      this.statusMessage = 'Could not send message. Please try again.';
    } finally {
      this.isSending = false;
    }
  }
}
