import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    skills: [
      {
        id: 1,
        title: "Programming Languages",
        skillList: [
          {
            id: 1,
            name: "Python",
            yearsOfExperience: 3,
            Proficiency: 8,
          },
          {
            id: 2,
            name: "C#",
            yearsOfExperience: 4,
            Proficiency: 8,
          },

          {
            id: 3,
            name: "Javascript",
            yearsOfExperience: 3,
            Proficiency: 7,
          },
        ],
      },
      {
        id: 2,
        title: "Frameworks",
        skillList: [
          {
            id: 1,
            name: ".NET",
            yearsOfExperience: 2,
            Proficiency: 7,
          },
        ],
      },
    ],
    courses: [
      {
        id: 1,
        type: "Nanodegree",
        name: "Cloud Developer Nanodegree with Udacity",
        YearOfCompletion: 2020,
        Providers: "AWS-Udacity",
      },
      {
        id: 2,
        type: "Course",
        name: "Cloud Developer",
        YearOfCompletion: 2019,
        Providers: "IBM-BUE",
      },
      {
        id: 3,
        type: "Course",
        name: "Machine Learning Course",
        YearOfCompletion: 2018,
        Providers: "Udacity",
      },
      {
        id: 4,
        type: "Basics Course - Nanodegree",
        name: "Bertelsmann Scholarship-Data Science Track",
        YearOfCompletion: "Ongoing",
        Providers: "Bertelsmann - Udacity",
      },
      {
        id: 5,
        type: "Course",
        name: "1MAC Intiative - Android Developer Track",
        YearOfCompletion: 2018,
        Providers: "1MAC-Udacity",
      },
      {
        id: 6,
        type: "Course",
        name: "1MAC Intiative - Fullstack Developer Track",
        YearOfCompletion: 2018,
        Providers: "1MAC-Udacity",
      },
    ],
    achievements: [
      {
        id: 1,
        title: "BUE game design competition",
        year: 2018,
        details: [
          "1st place winner with the entry: Black Valentine Game",
          "Created a top-down shoot'em up game using Unity Engine",
        ],
      },
      {
        id: 2,
        title: "11th Undergrad Research Conference (URC) in Dubai",
        year: 2019,
        details: [
          "IOT Hackathon during URC, 2nd place winner",
          `Presented an idea to optimize traffic lights using IOT distributed
          sensors to collect traffic data, using this data for a machine learning
          optimizer model.`,
        ],
      },
      {
        id: 3,
        title: "BUE AI competition",
        year: 2018,
        details: [
          `3rd place winner for the creation of a class timetable scheduler
          using a genetic algorithm technique on Java.`,
        ],
      },
      {
        id: 4,
        title: "Code-Geist Sefr Wahd Hackathon",
        year: 2019,
        details: [
          `Created Musician Freelancing App using React.js as Front-End and
          Node.js backend`,
        ],
      },
    ],
    count: 0,
  },
  mutations: {
    addSkill: (state, payload) => {
      console.log((state.count += payload));
    },
  },
  actions: {
    addSkill: (context, payload) => {
      context.commit("addSkill", payload);
    },
  },
  getters: {
    getSkills: (state) => {
      return state.skills;
    },
  },
  modules: {},
});
