import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Handshake } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Ana Silva',
      role: { pt: 'Fundadora & Diretora', en: 'Founder & Director', es: 'Fundadora y Directora' },
      bio: { 
        pt: 'Apaixonada por cultura brasileira e turismo sustentável.',
        en: 'Passionate about Brazilian culture and sustainable tourism.',
        es: 'Apasionada por la cultura brasileña y el turismo sostenible.'
      },
      image: null
    },
    {
      name: 'Carlos Santos',
      role: { pt: 'Pesquisador Cultural', en: 'Cultural Researcher', es: 'Investigador Cultural' },
      bio: { 
        pt: 'Historiador especializado em patrimônio imaterial.',
        en: 'Historian specialized in intangible heritage.',
        es: 'Historiador especializado en patrimonio inmaterial.'
      },
      image: null
    },
    {
      name: 'Marina Costa',
      role: { pt: 'Coordenadora de Conteúdo', en: 'Content Coordinator', es: 'Coordinadora de Contenido' },
      bio: { 
        pt: 'Jornalista com foco em turismo cultural.',
        en: 'Journalist focused on cultural tourism.',
        es: 'Periodista enfocada en turismo cultural.'
      },
      image: null
    },
    {
      name: 'Pedro Lima',
      role: { pt: 'Desenvolvedor', en: 'Developer', es: 'Desarrollador' },
      bio: { 
        pt: 'Tecnologia a serviço da cultura brasileira.',
        en: 'Technology serving Brazilian culture.',
        es: 'Tecnología al servicio de la cultura brasileña.'
      },
      image: null
    },
  ];

  const partners = [
    { name: 'IPHAN', type: 'institutional' },
    { name: 'UNESCO Brasil', type: 'institutional' },
    { name: 'Ministério do Turismo', type: 'government' },
    { name: 'IBRAM', type: 'institutional' },
  ];

  const currentLang = useTranslation().i18n.language as 'pt' | 'en' | 'es';

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              {t('team.title')}
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              {t('team.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              {t('team.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-brand transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-3xl font-serif font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm mb-3">
                      {member.role[currentLang]}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {member.bio[currentLang]}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Handshake className="h-8 w-8 text-primary" />
            <h2 className="font-serif text-3xl font-bold text-foreground">
              {t('team.partners')}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-brand transition-shadow">
                  <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
                    <p className="font-serif text-lg font-semibold text-center text-foreground">
                      {partner.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
