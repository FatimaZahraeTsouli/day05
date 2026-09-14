/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * EXTRACTION DE HASHTAGS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un tweet : "Beau temps à #Nador aujourd'hui avec la team #YouCode !",
 *  extrayez tous les hashtags et retournez-les dans un tableau ["#Nador", "#YouCode"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tweet="Beau temps à #Nador aujourd'hui avec la team #YouCode !"
let tableau=[]
let debut= tweet.search("#")
let fin = tweet.indexOf(" ", debut)
let resultat= tweet.slice(debut, fin)
tableau.push(resultat)
let debut1=tweet.indexOf("#", fin)
let fin1= tweet.indexOf(" ", debut1)
let resultat1= tweet.slice(debut1, fin1)
tableau.push(resultat1)
console.log(tableau)

