# Movie Explorer

## Installation

### Prérequis
- Node.js
- Une clé API OMDB gratuite

### Étapes
1. Cloner le projet
2. Installer les dépendances:
```bash
npm install
```

3. Créer un fichier `.env` avec votre clé API:
```
VITE_OMDB_API_KEY=votre_cle_api
```

4. Lancer l'application:
```bash
npm run dev
```

## Fonctionnalités

1. Rechercher un film par titre
2. Filtrer par année (2015-2025) et type (films/séries)
3. Charger plus de résultats avec le bouton "Charger plus"
4. Cliquer sur un film pour voir les détails
5. Utiliser le bouton retour pour revenir à la liste

## Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── MovieList.jsx
│   ├── MovieCard.jsx
│   └── Filters.jsx
├── pages/
│   ├── SearchPage.jsx
│   └── MovieDetails.jsx
├── services/
│   └── api.js
└── App.jsx
```