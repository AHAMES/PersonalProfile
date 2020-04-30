import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(Vuex);
Vue.use(VueAxios, axios);
const apiUrl = "http://localhost:3000";

function dateFormat(date: Date) {
  let month = "" + (date.getMonth() + 1);
  let day = "" + date.getDate();
  const year = date.getFullYear();
  let minutes = date.getMinutes().toString();
  let hours = date.getHours().toString();
  if (parseInt(minutes) < 10) minutes = "0" + minutes;
  if (parseInt(hours) < 10) hours = "0" + hours;
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return { month, day, year, minutes, hours };
}
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
    contactsData: [
      {
        id: 0,
        title: "Name",
        value: "Ahmed Hossam ElSabbagh",
      },

      {
        id: 1,
        title: "Personal Website",
        value: "Placeholder",
      },
      {
        id: 2,
        title: "Wuzzuf",
        value: "https://wuzzuf.net/me/ahmedelsabbagh",
      },
      {
        id: 3,
        title: "Phone",
        value: "+201092833102",
      },
      {
        id: 4,
        title: "Email",
        value: "Ahmed.h.elsabbagh@gmail.com",
      },
      {
        id: 5,
        title: "LinkedIn",
        value: "https://www.linkedin.com/in/ahmed-elsabbagh-a84278160/",
      },
      {
        id: 6,
        title: "GitHub",
        value: "https://github.com/AHAMES",
      },
    ],
    regularPosts: [],
    pinnedBlogPosts: [],
    count: 0,
  },
  mutations: {
    addSkill: (state, payload) => {
      console.log((state.count += payload));
    },
    FETCHREGULARBLOGPOSTS(state, payload) {
      //console.log(state.regularPosts.concat(...posts));
      //console.log(payload.posts);
      if (payload.posts.length != 0) {
        payload.self.page++;
        state.regularPosts = state.regularPosts.concat(payload.posts);
      }
    },
    FETCHPINNEDBLOGPOSTS(state, payload) {
      state.pinnedBlogPosts = state.pinnedBlogPosts.concat(payload.posts);
    },
  },
  actions: {
    addSkill: (context, payload) => {
      context.commit("addSkill", payload);
    },
    fetchRegularPosts({ commit }, payload) {
      Vue.axios
        .get(apiUrl + "/posts/regular/" + payload.self.page)
        .then((response) => {
          ///console.log(response.data);
          const rawPosts = response.data;
          const posts = [];
          for (let i = 0; i < rawPosts.length; i++) {
            const date = new Date(rawPosts[i].date);
            const time = dateFormat(date);

            posts.push({
              id: rawPosts[i]._id,
              subject: rawPosts[i].subject,
              text: rawPosts[i].text,
              pinned: rawPosts[i].pinned,
              dateStamp: [time.year, time.month, time.day].join("-"),
              timeStamp: time.hours + ":" + time.minutes,
            });
          }
          //console.log(posts);
          commit("FETCHREGULARBLOGPOSTS", { posts, self: payload.self });
        })
        .catch((error) => {
          //console.log("error " + error.statusText);
        });
    },
    fetchPinnedPosts({ commit }) {
      Vue.axios
        .get(apiUrl + "/posts/pinned")
        .then((response) => {
          ///console.log(response.data);
          const rawPosts = response.data;
          const posts = [];
          for (let i = 0; i < rawPosts.length; i++) {
            const date = new Date(rawPosts[i].date);
            const time = dateFormat(date);

            posts.push({
              id: rawPosts[i]._id,
              subject: rawPosts[i].subject,
              text: rawPosts[i].text,
              pinned: rawPosts[i].pinned,
              dateStamp: [time.year, time.month, time.day].join("-"),
              timeStamp: time.hours + ":" + time.minutes,
            });
          }
          //console.log(posts);
          commit("FETCHPINNEDBLOGPOSTS", { posts, self });
        })
        .catch((error) => {
          ///console.log("error " + error);
        });
    },
  },
  getters: {
    getSkills: (state) => {
      return state.skills;
    },
    QRCodeData: (state) => {
      let values = "";
      for (let i = 0; i < state.contactsData.length; i++) {
        const data = state.contactsData[i];
        values += data.title + ":\n" + data.value + "\n \n";
      }
      return values;
    },
  },
  modules: {},
});
