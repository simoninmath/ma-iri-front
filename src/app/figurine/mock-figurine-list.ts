/* Chapitre 2 : Les Composants */
import { Figurine } from '../figurine/figurine';
  
export const FIGURINES: Figurine[] = [
    {
        id: 1,
        name: "Hive Queen Walking",
        hp: 25,
        cp: 5,
        picture: "https://3dminis-factory.com/62996-thickbox_default/cyborg-hive-queen-walking.jpg",
        types: ["Cyborg"],
        created: new Date()
    },
    {
        id: 2,
        name: "Hive Queen Rule",
        hp: 28,
        cp: 6,
        picture: "https://3dminis-factory.com/62994-large_default/cyborg-hive-queen-rule.jpg",
        types: ["Cyborg"],
        created: new Date()
    },
    {
        id: 3,
        name: "Guardian Standing",
        hp: 21,
        cp: 4,
        picture: "https://3dminis-factory.com/62970-thickbox_default/mecha-guardian-standing.jpg",
        types: ["Droid"],
        created: new Date()
    },
    {
        id: 4,
        name: "Assassin Jumping",
        hp: 16,
        cp: 2,
        picture: "https://3dminis-factory.com/62952-large_default/assassin-droid-jumping.jpg",
        types: ["Droid"],
        created: new Date()
    },
    {
        id: 5,
        name: "Apocalypse Survivor",
        hp: 30,
        cp: 7,
        picture: "https://3dminis-factory.com/62898-large_default/apocalypse-survivor.jpg",
        types: ["Human"],
        created: new Date()
    },
    {
        id: 6,
        name: "OneEye Infantry",
        hp: 18,
        cp: 6,
        picture: "https://3dminis-factory.com/45201-thickbox_default/one-eye-allien-infantry-rush.jpg",
        types: ["Allien"],
        created: new Date()
    },
    {
        id: 7,
        name: "NightVision Infantry",
        hp: 14,
        cp: 5,
        picture: "https://3dminis-factory.com/45205-thickbox_default/night-vision-infantry-pistols.jpg",
        types: ["Human"],
        created: new Date()
    },
    {
        id: 8,
        name: "Plague Annihilator",
        hp: 16,
        cp: 4,
        picture: "https://3dminis-factory.com/57483-thickbox_default/plague-annihilator-mech.jpg",
        types: ["Droid"],
        created: new Date()
    },
    {
        id: 9,
        name: "Cyborg Medic",
        hp: 21,
        cp: 7,
        picture: "https://3dminis-factory.com/57457-thickbox_default/cyborg-medic.jpg",
        types: ["Cyborg"],
        created: new Date()
    },
    {
        id: 10,
        name: "Mutant SeaBeast",
        hp: 19,
        cp: 3,
        picture: "https://3dminis-factory.com/57429-thickbox_default/mutant-sea-beast.jpg",
        types: ["Beast"],
        created: new Date()
    },
    {
        id: 11,
        name: "Sword Head",
        hp: 25,
        cp: 5,
        picture: "https://3dminis-factory.com/57389-thickbox_default/sword-head-kaiju.jpg",
        types: ["Beast"],
        created: new Date()
    },
    {
        id: 12,
        name: "Scientist Gun",
        hp: 17,
        cp: 8,
        picture: "https://3dminis-factory.com/57419-thickbox_default/scientist-gun.jpg",
        types: ["Human"],
        created: new Date()
    }
];