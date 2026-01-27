import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Handshake } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Adriane Laste',
      role: { 
        pt: 'Cofundadora & Empreendedora Social', 
        en: 'Co-founder & Social Entrepreneur', 
        es: 'Cofundadora y Emprendedora Social' 
      },
      bio: { 
        pt: 'Empreendedora social gaúcha com MBA em ESG e Gestão Empresarial. Sócia fundadora da Clic Marketing e Vendas, realizou 11 projetos socioculturais desde 2008. Fundadora do Hub Nossa Biblioteca, já doou mais de 115 mil livros para 590 bibliotecas no Brasil.',
        en: 'Social entrepreneur from Rio Grande do Sul with an MBA in ESG and Business Management. Co-founder of Clic Marketing e Vendas, she has carried out 11 sociocultural projects since 2008. Founder of Hub Nossa Biblioteca, having donated over 115,000 books to 590 libraries across Brazil.',
        es: 'Emprendedora social de Rio Grande do Sul con MBA en ESG y Gestión Empresarial. Cofundadora de Clic Marketing e Vendas, realizó 11 proyectos socioculturales desde 2008. Fundadora de Hub Nossa Biblioteca, donando más de 115 mil libros a 590 bibliotecas en Brasil.'
      },
      image: null
    },
    {
      name: 'Nelma Zero',
      role: { 
        pt: 'Cofundadora & Consultora de Sustentabilidade', 
        en: 'Co-founder & Sustainability Consultant', 
        es: 'Cofundadora y Consultora de Sostenibilidad' 
      },
      bio: { 
        pt: 'Mais de 27 anos de experiência em comunicação e sustentabilidade. Pós-graduada em Meio Ambiente e Sustentabilidade pela FGV, ativista ambiental pelo Climate Reality Project e Multiplicadora B Corp. Especialista em desenvolvimento de negócios com impacto social positivo.',
        en: 'Over 27 years of experience in communication and sustainability. Postgraduate in Environment and Sustainability from FGV, environmental activist for Climate Reality Project and B Corp Multiplier. Specialist in business development with positive social impact.',
        es: 'Más de 27 años de experiencia en comunicación y sostenibilidad. Posgrado en Medio Ambiente y Sostenibilidad por FGV, activista ambiental del Climate Reality Project y Multiplicadora B Corp. Especialista en desarrollo de negocios con impacto social positivo.'
      },
      image: null
    },
    {
      name: 'Fernanda da Silva Pereira',
      role: { 
        pt: 'Cofundadora & Especialista em Patrimônio Cultural', 
        en: 'Co-founder & Cultural Heritage Specialist', 
        es: 'Cofundadora y Especialista en Patrimonio Cultural' 
      },
      bio: { 
        pt: 'Especialista em Patrimônio Cultural com 10 anos no IPHAN como Coordenadora de Comunicação. Idealizadora da Exposição Patrimônio Imaterial Brasileiro e pesquisadora do projeto Caravana do Patrimônio Cultural, que impactou 650 mil pessoas.',
        en: 'Cultural Heritage specialist with 10 years at IPHAN as Communication Coordinator. Creator of the Brazilian Intangible Heritage Exhibition and researcher of the Cultural Heritage Caravan project, which impacted 650,000 people.',
        es: 'Especialista en Patrimonio Cultural con 10 años en IPHAN como Coordinadora de Comunicación. Idealizadora de la Exposición Patrimonio Inmaterial Brasileño e investigadora del proyecto Caravana del Patrimonio Cultural, que impactó a 650 mil personas.'
      },
      image: null
    },
  ];

  const currentLang = useTranslation().i18n.language as 'pt' | 'en' | 'es';

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pattern-indigenous opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t('team.title')}
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                    <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-primary-foreground text-3xl font-serif font-bold">
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

      {/* Partners Section - Hidden for now
      <section className="py-20 bg-muted/50">
        ...
      </section>
      */}
    </Layout>
  );
};

export default Team;
