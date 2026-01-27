

## Ataîru - Institutional Website & Heritage Map

### 🎯 Project Overview
A stunning trilingual institutional website showcasing Brazil's cultural and natural heritage, featuring an innovative dual-map experience and comprehensive heritage database covering all 5 regions of Brazil.

---

### 🎨 Visual Identity
- **Primary Colors**: Deep forest green (#1a4d2e), Terracotta coral (#e07a5f), Navy blue (#1d3557), Warm gold (#d4a574)
- **Indigenous-inspired patterns** as decorative accents
- **Your Ataîru logo** prominently featured
- **Photography-forward design** highlighting Brazil's beauty

---

### 📱 Site Structure

#### **1. Homepage (Página Inicial)**
- **Hero Section**: Full-screen with your tagline "Seu Companheiro de Viagem ao Coração do Brasil"
- **Stylized Brazil Map**: Artistic illustrated map showing the 5 regions with animated pins - clicking a region reveals its states
- **Quick Stats**: Number of heritage sites, UNESCO sites, regions covered
- **Featured Heritages**: Rotating showcase of 4-6 highlighted sites
- **Call-to-Action**: "Explore the Interactive Map" button

#### **2. About the Project (Sobre o Projeto)**
- **Mission & Vision**: What Ataîru aims to achieve
- **The Story**: Origin and inspiration behind the project
- **Understanding Heritage**: Explanation of:
  - Patrimônio Mundial (UNESCO World Heritage)
  - Patrimônio Material (Tangible Heritage)
  - Patrimônio Imaterial (Intangible Heritage)
  - Parques Naturais (Natural Parks)
- **Future Vision**: Roadmap to the full travel companion webapp

#### **3. Heritage Categories (Categorias de Patrimônio)**
Four visual category pages with filtering:

**🏛️ World Heritage (Patrimônio Mundial)**
- Missões Jesuíticas Guaranis, Ouro Preto, Olinda, Brasília, Serra da Capivara, etc.

**🏗️ Material Heritage (Patrimônio Material)**
- Historic centers, museums, churches, theaters, monuments
- Organized by state with rich descriptions

**🎭 Intangible Heritage (Patrimônio Imaterial)**
- Cultural practices: Capoeira, Frevo, Maracatu, Bumba-meu-boi
- Culinary traditions: Acarajé, Moqueca, Queijo Artesanal
- Festivals: Círio de Nazaré, Festival de Parintins, São João
- Crafts: Renda Irlandesa, Cerâmica Terena, Viola de Cocho

**🌿 Natural Heritage (Parques Nacionais/Estaduais)**
- National Parks: Iguaçu, Lençóis, Chapada Diamantina, Fernando de Noronha
- State Parks and protected areas
- Geoparks and ecological reserves

#### **4. Interactive Heritage Map (Mapa Interativo)**
**Dual Experience:**

**A. Stylized Overview Map**
- Beautiful illustrated Brazil map
- 5 colored regions (Sul, Sudeste, Nordeste, Centro-Oeste, Norte)
- Click a region → zooms to show states
- Click a state → transitions to detailed interactive map

**B. Full Interactive Map (Leaflet/OpenStreetMap)**
- Zoomable, pannable real map
- **Custom pin markers** in Ataîru style:
  - 🟡 Gold pins: UNESCO World Heritage
  - 🟢 Green pins: Natural Heritage/Parks
  - 🟤 Terracotta pins: Material Heritage
  - 🔵 Blue pins: Intangible Heritage (shown at city level)

**Pin Click → Heritage Card:**
- Heritage name (trilingual)
- Location/State/Region
- Category badge
- Brief description
- Photo (when available)
- "Learn More" link to full details

**Filtering Options:**
- By Region (5 regions)
- By State (27 states)
- By Category (4 types)
- Search by name

#### **5. Team & Partners (Equipe e Parceiros)**
- Team member cards with photos, roles, bios
- Partner organization logos
- Institutional supporters
- Acknowledgments section

#### **6. Contact (Contato)**
- Contact form (Name, Email, Subject, Message)
- Direct email address
- Social media links (Instagram, Facebook, etc.)
- Newsletter signup

---

### 🌍 Trilingual System (PT/EN/ES)
- **Language switcher** in navigation header
- **All content translated**: 
  - Site interface and navigation
  - Heritage names and descriptions
  - Category explanations
- **URL structure**: `/pt/`, `/en/`, `/es/` prefixes
- **Default**: Portuguese

---

### 🗄️ Heritage Data Architecture
Structured database ready for your 500+ heritage sites:

```
Heritage Entry:
├── Name (PT/EN/ES)
├── Category (World/Material/Intangible/Natural)
├── Region (Sul/Sudeste/Nordeste/Centro-Oeste/Norte)
├── State
├── City/Location
├── Coordinates (lat/lng)
├── Description (PT/EN/ES)
├── Image URL
└── UNESCO status (yes/no)
```

**Initial Import**: Your complete list organized by the 27 states
**Easy Updates**: Simple structure to add new sites anytime

---

### 📱 Responsive Design
- **Desktop**: Full map experience with side panels
- **Tablet**: Adapted layout with collapsible filters
- **Mobile**: Touch-optimized map, bottom sheet for heritage details
- **Offline-ready**: Core data cached for tourists with poor connectivity

---

### 🚀 Technical Approach
- **Map**: Leaflet with OpenStreetMap (free, no API key needed)
- **Translations**: i18n system for easy management
- **Heritage Data**: JSON structure (easily upgradeable to database later)
- **Images**: Optimized placeholder system until photos are added
- **Performance**: Lazy loading for 500+ map markers

---

### 📋 Content Priority for Launch
**Phase 1 - Ready at Launch:**
- All heritage locations plotted on map
- Basic descriptions for each entry
- Full trilingual navigation
- All institutional pages complete

**Phase 2 - Easy to Add Later:**
- Detailed descriptions per heritage
- Professional photography
- Audio guides integration
- User reviews/ratings

---

This creates a beautiful institutional presence today while building the foundation for your complete travel companion webapp!

