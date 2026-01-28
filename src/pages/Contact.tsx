import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, Instagram } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { PatternBorder } from '@/components/ui/PatternBorder';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      description: 'Obrigado pelo contato!'
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.newsletter.title'),
      description: 'Inscrição realizada com sucesso!'
    });
    setNewsletterEmail('');
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/atairu.tur.br/', label: 'Instagram' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-15" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Pattern Border */}
      <PatternBorder variant={2} height={20} opacity={0.9} />

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-forest/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="h-6 w-6 text-forest" />
                    <h2 className="font-serif text-2xl font-bold">
                      {t('contact.title')}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">{t('contact.name')}</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="border-2 focus:border-forest"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">{t('contact.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="border-2 focus:border-forest"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">{t('contact.subject')}</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="border-2 focus:border-forest"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">{t('contact.message')}</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="border-2 focus:border-forest"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-forest hover:bg-forest-light">
                      <Send className="h-4 w-4 mr-2" />
                      {t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Newsletter */}
              <Card className="bg-terracotta text-white">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    {t('contact.newsletter.title')}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {t('contact.newsletter.text')}
                  </p>
                  
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder={t('contact.newsletter.placeholder')}
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      required
                    />
                    <Button type="submit" className="bg-white text-terracotta hover:bg-cream">
                      {t('contact.newsletter.subscribe')}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-2 border-navy/20">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    {t('footer.followUs')}
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-2 border-gold/30">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    Email
                  </h3>
                  <a 
                    href="mailto:contato@atairu.tur.br"
                    className="text-forest hover:underline font-medium"
                  >
                    contato@atairu.tur.br
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Bottom Pattern Border */}
      <PatternBorder variant={1} height={20} opacity={0.9} />
    </Layout>
  );
};

export default Contact;
