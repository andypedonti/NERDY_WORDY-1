import axios from "axios";

export default {
  allPictures: function() {
    return axios.get("https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key");
  }
};