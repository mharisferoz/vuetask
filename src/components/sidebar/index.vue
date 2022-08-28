<template>
  <div>
    <v-app-bar short dense app>
      <span @click="changeToggleState" @mouseover="drawer = true" >Menu</span>
      <v-toolbar-title>
        <v-icon
        large
        color="blue darken-2"
      >
        mdi-brightness-percent
      </v-icon>
      </v-toolbar-title>
      <!-- <v-row>
        <v-col lg="2" md="2" sm="12" xs="12">
          <v-title name="menu"  id="btn-toggle-icon" @click="changeToggleState" @mouseover="drawer = true">Menu</v-title>
        </v-col>
        <v-col lg="10" md="10" sm="12" xs="12" class="txtaligncenter">
          <v-icon
            large
            color="blue darken-2"
          >
            mdi-brightness-percent
          </v-icon>
        </v-col>
      </v-row> -->
      
    </v-app-bar>
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-navigation-drawer
          v-model="drawer"
          absolute
          bottom
          temporary
          class="boxshadownone"
        >
        <v-list
        nav
        dense
        class="nopadding"
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            class="borderleftzero borderrightzero bordertopzero"
            prepend-icon="mdi-account-circle"
            @mouseover="menuClick(item)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.name" >
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon
              large
              color="black darken-2"
            >
              mdi-menu-right
            </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
              v-model="drawer2"
              absolute
              bottom
              temporary
              class="submenu boxshadownone"
            >
            <v-list
            nav
            dense
            class="nopadding"
          >

            <v-list-item-group
              v-model="selectedItem2"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in submenu"
                :key="i"
                class="borderleftzero borderrightzero bordertopzero"
                @click="subMenuClick(item)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
       
        <v-row>
          <v-col cols="12" sm="4" md="4" class="borderrightzero"></v-col>
          <v-col cols="12" sm="4" md="4" class="borderrightzero txtaligncenter fnwtbold"> SPECTACLES WOMEN</v-col>
          <v-col cols="12" sm="4" md="4" class="borderrightzero">
            <v-row>
              <v-col sm="3" md="3" @click="filter=!filter" class="borderleftzero bordertopzero borderbottomzero txtaligncenter fnsz14">COLOR</v-col>
              <v-col sm="3" md="3" @click="filter=!filter" class="borderleftzero bordertopzero borderbottomzero txtaligncenter fnsz14">SHAPE</v-col>
              <v-col sm="3" md="6"></v-col>
            </v-row>
          </v-col>
         
        </v-row>
        <v-row v-if="filter">
          <v-col  cols="12" sm="6" md="6" class="bordertopzero txtaligncenter fnsz14 border">COLOR</v-col>
          <v-col  cols="12" sm="6" md="6" class="bordertopzero borderleftzero txtaligncenter fnsz14 border">SHAPE</v-col>
          <v-col  cols="12" sm="6" md="6" class="bordertopzero txtaligncenter fnsz14 border">
            <v-row>
              <v-col sm="4" md="4" class="borderleftzero bordertopzero borderbottomzero">
                <div class="labelBtn" @click="changeFilterColor('black')">
                  <span class="labelBtnIcon" style="background-image:url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_black_01.png');" ></span>
                  <span class="labelBtnText">Black</span>
                </div>
              </v-col>
              <v-col sm="4" md="4" class="borderleftzero bordertopzero borderbottomzero">
                <div class="labelBtn" @click="changeFilterColor('tortoise')">
                  <span class="labelBtnIcon" style="background-image:url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_tortoise_02.png');" ></span>
                  <span class="labelBtnText">Tortoise</span>
                </div>
              </v-col>
              <v-col sm="4" md="4" class="borderleftzero bordertopzero borderbottomzero">
                <div class="labelBtn" @click="changeFilterColor('coloured')">
                  <span class="labelBtnIcon" style="background-image:url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_coloured_03.png');" ></span>
                  <span class="labelBtnText">Coloured</span>
                </div>
              </v-col>
              <v-col sm="4" md="4" class="borderleftzero bordertopzero borderbottomzero">
                <div class="labelBtn" @click="changeFilterColor('crystal')">
                  <span class="labelBtnIcon" style="background-image:url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_crystal_04.png');" ></span>
                  <span class="labelBtnText">Crystal</span>
                </div>
              </v-col>
              <v-col sm="4" md="4" class="borderleftzero bordertopzero borderbottomzero">
                <div class="labelBtn" @click="changeFilterColor('dark')">
                  <span class="labelBtnIcon" style="background-image:url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_dark_05.png');" ></span>
                  <span class="labelBtnText">Dark</span>
                </div>
              </v-col>
              <v-col sm="4" md="4" class="borderleftzero bordertopzero borderbottomzero">
                <div class="labelBtn" @click="changeFilterColor('bright')">
                  <span class="labelBtnIcon" style="background-image:url('https://d32y5z2afvomc1.cloudfront.net/assets/filters_bright_06.png');" ></span>
                  <span class="labelBtnText">Bright</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col  cols="12" sm="6" md="6" class="bordertopzero borderleftzero txtaligncenter fnsz14 border">
            <v-row>
              <v-col sm="3" md="3" class="noborder">
                <div class="labelBtn" @click="changeFilterShape('square')">
                  <span class="labelBtnText">Square</span>
                </div>
              </v-col>
              <v-col sm="3" md="3" class="noborder">
                <div class="labelBtn" @click="changeFilterShape('rectangle')">
                  <span class="labelBtnText">Rectangle</span>
                </div>
              </v-col>
              <v-col sm="3" md="3" class="noborder">
                <div class="labelBtn" @click="changeFilterShape('round')">
                  <span class="labelBtnText">Round</span>
                </div>
              </v-col>
              <v-col sm="3" md="3" class="noborder">
                <div class="labelBtn" @click="changeFilterShape('catEye')">
                  <span class="labelBtnText">Cat-Eye</span>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
       
          <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50"> -->
             <v-row id="infinite-list" style="overflow-y: auto;height: 1000px;">
              <v-col v-for="listItem in glasses" v-bind:key="listItem.id" cols="12" md="4" class="nopadding">
                <v-card
                >
                <v-card-title class="cardheader" v-bind:name="listItem.name">
                  {{listItem.name}}
                </v-card-title>
                  <v-img v-bind:src="listItem.glass_variants[0].media[0].url"></v-img>
                  
                </v-card>
              </v-col>
            </v-row>
          <!-- </div> -->
       
  
      </v-container>
    </v-main>
  </div>
</template>

<script>
import "./style.css";
import axios from "axios";

export default {
  name: "Home",
  data: () => {
    return {
      filters:{
        color:{
          black:true,
          tortoise:false,
          coloured:true,
          crystal:false,
          dark:false,
          bright:false,
        },
        shape:{
          square:false,
          rectangle:false,
          round:true,
          catEye:false,
        }
      },
      page:2,
      busy: false,
      filter: false,
      selectedItem: 0,
      selectedItem2: 0,
      drawer: false,
      drawer2: false,
      menuCompact: {
        hidden: true,
      },
      profileInfo: {
        name: "Klinger Matheus",
        photo: {
          file: "me.jpg",
          title: "Foto do Klinger",
        },
      },
      memberActive: true,
      glasses: [],
      menu: [
        {"id":1,"name":"Women","configuration_name":"spectacles-women"},
        {"id":2,"name":"Men","configuration_name":"spectacles-men"}
      ],
      menuLinks: [],
      submenu:[]
    };
  },
  methods: {
    changeFilterColor(color){
      this.filters.color[color] = !this.filters.color[color];
      this.loadGlasses();
    },
    changeFilterShape(shape){
      for(let key in this.filters.shape){
        this.filters.shape[key] =  false;
      }
      this.filters.shape[shape] = !this.filters.color[shape];
      this.loadGlasses();
    },
    loadMore: function() {
      if(!this.busy){
        this.busy = true;
        let ths = this;
        setTimeout(() => {
          this.getApi("https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D="+this.page+"&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false",
            function(data){
              if(data.glasses.length > 0){
                ths.glasses = [...ths.glasses,...data.glasses];
                ths.page += 1;
              }
              else{
                ths.page -= 1;
              }
              ths.busy = false;
            }
          );
        },500);
      }
    },
    menuClick(itm){
      this.submenu = this.menuLinks.filter(element => {
        return element.parent == itm.name
      });
      this.drawer2 = true;
    },
    subMenuClick(itm){
      debugger;
      console.log(itm);
      this.submenu = this.menuLinks.filter(element => {
        return element.parent == itm.name
      });
      this.drawer2 = false;
      this.drawer = false;
    },
    changeToggleState() {
      this.drawer = !this.drawer;
    },
    getApi(url,callback){
      axios
      .get(url)
      .then(response => {
        callback(response.data)
        // this.glasses = response.data.glasses;
      })
    },
    loadGlasses(){
      let colors = "";
      let shapes = "";
      for(let key in this.filters.color){
        if(this.filters.color[key] ==  true){
          colors += "filters[glass_variant_frame_variant_colour_tag_configuration_names][]="+key+"&";
        }
      }
      for(let key in this.filters.shape){
        if(this.filters.shape[key] ==  true){
          shapes = "filters[glass_variant_frame_variant_frame_tag_configuration_names][]="+key+"&";
        }
      }
      let url = `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_varia nt_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=1&
        `+colors+`
        `+shapes+`
        filters[frame_var iant_home_trial_available]=false`;
      let ths = this;
      // https://api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/glasses?sort%5Btype%5D=collection_relations_position&sort%5Border%5D=asc&filters%5Blens_variant_prescriptions%5D%5B%5D=fashion&filters%5Blens_variant_types%5D%5B%5D=classic&page%5Blimit%5D=12&page%5Bnumber%5D=1&filters%5Bglass_variant_frame_variant_colour_tag_configuration_names%5D%5B%5D=coloured&filters%5Bglass_variant_frame_variant_frame_tag_configuration_names%5D%5B%5D=round&filters%5Bframe_variant_home_trial_available%5D=false
      this.getApi(url,
        function(data){
          ths.glasses = data.glasses;
        }
      );
    },
    loadSubmenu(){
      let ths = this;
      this.getApi("https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections",
        function(data){
          let tempMenu = []; 
          data.collections.forEach(element => {
            if(element.name.indexOf("Women") > 0){
              element["parent"] = "Women";
            }
            else{
              element["parent"] = "Men";
            }
            element.name = element.name.split(" ")[0];
            tempMenu.push(element);
          });
          ths.menuLinks = tempMenu;
        }
      );
    }
  },
  mounted () {
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', () => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    this.loadGlasses();
    this.loadSubmenu();
  }
};
</script>
