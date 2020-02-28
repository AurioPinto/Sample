<template>
  <div id="info">
    <ul>
      <li v-for="info in info" :key="info" @click="info.show = !info.show">
        <h2>{{ info.name | formatId }}</h2>
        <p v-show="info.show">{{ info.speciality }}</p>
      </li>
    </ul>
    <button @click="deleteinfo">Delete Info</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        { name: "Chicago", speciality: "Machine Enginner", show: false },
        { name: "West", speciality: "CV Enginner", show: false },
        { name: "Agostinho", speciality: "Test Enginner", show: false },
        { name: "Delfina", speciality: "Machine Enginner", show: false },
        { name: "Chicago", speciality: "Computer Enginner", show: false },
        { name: "Alexandra", speciality: "Envirmental Enginner", show: false },
        {
          name: "Jose Augusto ",
          speciality:
            "The current research aim is to construct a fast system to enhance the quality of QR Code images to improve the decoding success rate, hence decreasing the time required to read the data contained in 2D bar codes. The system is an Convolutional Neural Network (CNN) with a structure of an auto-encoder, trained with a TensorFlow toolkit on self-generated images. The input is an image with a poor resolution and quality and the output is a clear, noise-less picture of the same QR Code. The output of the CNN can then be used to decode the QR Code’s data with any preferred decoding algorithm. The system has been deployed on the Raspberry Pi 3B+ and evaluated in different simulation obtaining an increase of about +100% success rate of correct decoding of low-quality QR Code images.",
          show: false
        }
      ],
      //   Using filter
      blogs: []
    };
  },
  methods: {
    deleteinfo: function() {
      this.info.pop();
    }
  }
  // computed: {
  //   formatId: function() {
  //     return this.formatId.filter(formatId => {
  //       return "string";
  //     });
  //   }
  // }

  //   created() {
  //     this.$http
  //       .get("https:jsonplaceholder.typicode.com/posts")
  //       .then(function(data) {
  //         this.blogs = data.body.slice(0, 10);
  //       });
  //   },
  //   filters: {
  //     formatId: function(value) {
  //       if (!value) return "";
  //       value = value.toString();
  //       return value.charAt(0).toUpperCase() + value.slice(1);
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
#info {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
