<script setup>
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { onMounted, reactive, ref } from 'vue';

const formState = reactive({
      user: '',
      password: '',
    });
    const handleFinish = values => {
        console.log("Handling finish:", values, formState);
    };
    const handleFinishFailed = errors => {
      console.log(errors);
    };
const isDesktop = ref(window.innerWidth >= 1024);
const handleResize =()=>{
    isDesktop.value = window.innerWidth >= 1024;
}
onMounted(()=>{
    window.addEventListener('resize', handleResize);
})
</script>

<template>
    
    <div v-if="!isDesktop" class="h-screen w-screen min-h-screen bg-gray-200">
        <div class="w-full h-1/2">
            
        </div>
        <div class="w-full h-1/2 sm:px-32 px-4" >
            <a-form
                :model="formState"
                @finish="handleFinish"
                @finishFailed="handleFinishFailed"
                class=" bg-white sm:py-8 pt-4 pb-2 sm:px-12 px-4 rounded-md shadow-md"
            >
                <a-form-item class="bg-red-600">
                <a-input v-model:value="formState.user" placeholder="Username" class="bg-transparent">
                    <template  #prefix><UserOutlined class="text-black" /></template>
                    
                </a-input>
                </a-form-item>
                <a-form-item>
                <a-input v-model:value="formState.password" type="password" placeholder="Password">
                    <template #prefix><LockOutlined class="text-black"  /></template>
                </a-input>
                </a-form-item>
                <a-form-item class="flex justify-center">
                <a-button
                    
                    html-type="submit"
                    :disabled="formState.user === '' || formState.password === ''"
                    class="bg-black text-white "
                >
                    Log in
                </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
    <div v-else class="w-full h-screen flex justify-center pt-32">
        <p>This content is only accessible on mobile and tablet screens. Please use a mobile or tablet device to access this page.</p>
    </div>
</template>


<style scoped>
.ant-form-item{
    background: none;
}
.ant-input {
    background: transparent !important;
}
</style>