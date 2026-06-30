<script setup>
import { ref } from 'vue'
import {useAuth} from '../services/auth'
import { useRouter } from "vue-router";
const router= useRouter();

const { signup } = useAuth()

const showPassword = ref(false)
const password = ref(null) //model

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',// if statements
    passwordMatch: () => password == confirmPassword || 'Passwords must match'//function to check password
  }


  //data models
const firstname= ref(null)
const lastname=ref(null)
const email=ref(null)
const phone =ref(null)
const location=ref(null)
const address=ref(null)

function register()
{
    const data = {
        firstname: firstname.value,
        lastname:lastname.value,
        email:email.value,
        phone:phone.value,
        location:location.value,
        password:password.value,
        address:address.value,
        role: 2,

        //role 1 for admin ,role 2 customer
    }
    signup(data)
    router.push('/').then(() =>{
        router.go(0)
    });
  
}



</script>
<template>
<v-container align="center" class="mt-16">
    <v-row>
        <v-col>
            <v-card max width="80%" class="bg-secondary">
                <v-img src="/logo.png"height="150"width="200"class="mt-4"></v-img>
                <v-card-title class="ma-5">sign up</v-card-title>
                <v-divider></v-divider>
                <v-form class="ma-8">
                    <v-row>
                        <v-col md="3">
                        <div>first name</div>
                        </v-col>
                         <v-col md="3">
                            <v-text-field v-model="firstname"></v-text-field>
                         </v-col>
                          <v-col md="3">
                            <div>Last name</div>
                          </v-col>
                           <v-col md="3">
                            <v-text-field v-model="lastname"></v-text-field>
                           </v-col>
                    </v-row>
                     <v-row>
                        <v-col md="3">
                        <div>Email</div>
                        </v-col>
                         <v-col md="3">
                            <v-text-field v-model="email"></v-text-field>
                         </v-col>
                          <v-col md="3">
                            <div >phone</div>
                          </v-col>
                           <v-col md="3">
                            <v-text-field type="number" v-model="phone"></v-text-field>
                           </v-col>
                             
                    </v-row> 
                    <v-row>
                        <v-col md="3">
                            <div>location</div>
                        </v-col>
                        <v-col md="3">
                            <v-select :items="['Nairobi','Busia','Kakamega','Kajiado','Kisumu']" v-model="location">

                            </v-select>"
                        </v-col>
                        <v-col md="3">
                            <div>address</div>
                        </v-col>
                        <v-col md="3">
                            <v-text-field v-model="address"></v-text-field>
                        </v-col>
                    </v-row> 
                    <v-row>
                        <v-col md="3">
                            <div>password</div>
                        </v-col>
                        <v-col md="3">
                            <v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                        </v-col>
                        <v-col md="3">
                        <div>confirm password</div>
                        </v-col>
                         <v-col md="3">
                        <v-text-field 
                                v-model="confirmPassword"
                                :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                :type="showConfirm ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showConfirm = !showConfirm"
                            ></v-text-field>	
                            
                         </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <v-btn @click="register()" block>sign up</v-btn>
                        
                        </v-col>
                        <v-col md="6">
                        <div>
                            Alraedy have an acount ?
                            <router-link to ='/login'>login</router-link>
                        </div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>