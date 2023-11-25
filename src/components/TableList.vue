<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
</script>

<template>
    <div class="w-full h-screen px-2 pt-4">
        <div class="grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-2">
            <div class="bg-white h-28 rounded-md shadow-lg">
                <div class="p-2 ">
                    <p class="font-sans font-extrabold mb-0">Table-<span>1</span></p>
                    <p class="font-sans font-medium text-sm mt-2 ">Capacity-<span>1</span></p>
                    <a-dropdown>
                        <template #overlay>
                            <a-menu >
                            <a-menu-item key="1">
                                Prepairing
                            </a-menu-item>
                            <a-menu-item key="2">
                                Complete
                             
                            </a-menu-item>
                            <a-menu-item key="3">
                              Serving
                               
                            </a-menu-item>
                            <a-menu-item key="4">
                              Finished
                               
                            </a-menu-item>
                            <a-menu-item key="5">
                              Eating
                               
                            </a-menu-item>
                            <a-menu-item key="5">
                              Got_bill
                               
                            </a-menu-item>
                            </a-menu>
                        </template>
                        <a-button class="w-full flex items-center justify-between bg-black text-white">
                            <span class="float-left">Free</span>
                            <DownOutlined class="float-right"/>
                        </a-button>
                    </a-dropdown>
                </div>
            </div>

        </div>
    </div>
</template>

<style  scoped>

</style>