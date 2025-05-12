<template>
    <div class="container ">
        <h2 class="mb-5">Frequently Asked Question</h2>
        <div class="accordion mb-2" style="" id="faqAccordion">
            <div class="accordion-item mb-2" v-for="(QA,index) in QAs">
                <h2 class="accordion-header rounded" :id="'faq' + index + '-heading'">
                    <button class="accordion-button collapsed bg-secondary rounded fw-bold" style="color: var(--citrine);" type="button" data-bs-toggle="collapse" :data-bs-target="'#faq' + index" aria-expanded="true" :aria-controls="'faq'+index">
                    <span class="fs-4">Q</span>: {{ QA.question }}
                </button>
                </h2>
                <div :id="'faq'+index" class="arrordion-collapse collapse" :aria-labelledby="'faq' + index + '-heading'" data-bs-parent="#faqAccordion">
                    <div class="accordion-body fw-bold" style="background-color: var(--raisin-black); color: var(--white);">
                    <span class="fs-4 d-inline">A</span>: {{ QA.answer }}
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted} from 'vue';    
const QAs  = ref([]);

onMounted(async ()=>{
    const res = await fetch("/assets/jsons/QA.json");
    QAs.value = await res.json();
})
</script>

<style scoped>
.accordion,
.accordion-item,
.accordion-header,
.accordion-body {
  background-color: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}

.accordion,
.accordion-item,
.accordion-header,
.accordion-body,
.accordion-button {
  box-shadow: none !important;
}
</style>