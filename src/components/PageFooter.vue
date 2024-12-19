<script setup>
import { ref } from 'vue';

const visible = ref(false);

const title = ref("");
const description = ref("");
const city = ref("");
const postalCode = ref("");
const streetName = ref("");
const organiser = ref("");
const start = ref();
const end = ref();

async function sendData() {
    visible.value = false;

    console.log(new Date(start.value).getTime());

    try {
        await fetch("http://localhost:3031/event", {
            method: "POST",

            body: JSON.stringify({
                title: title.value,
                description: description.value,
                location: { city: city.value, postalCode: postalCode.value, streetName: streetName.value },
                organiser: organiser.value,
                start: new Date(start.value).getTime(),
                end: new Date(end.value).getTime()
            }),

            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    catch (err) {
        console.log(err);
    }
}

</script>


<template>
    <dialog :open="visible">
        <form action="" method="dialog" id="submit-event">
            <label for="title"> Title: </label>
            <input type="text" name="title" id="title" v-model="title">

            <label for="description"> Description </label>
            <input type="text" name="description" id="description" v-model="description">

            <label for="city"> City </label>
            <input type="text" name="city" id="city" v-model="city">

            <label for="postalCode"> Postalcode </label>
            <input type="text" name="postalCode" id="postalCode" v-model="postalCode">

            <label for="streetName"> Street name </label>
            <input type="text" name="streetName" id="streetName" v-model="streetName">

            <label for="organiser"> Name of organiser </label>
            <input type="text" name="organiser" id="organiser" v-model="organiser">

            <label for="start"> Start time </label>
            <input type="date" name="start" id="start" v-model="start">

            <label for="end"> End time </label>
            <input type="date" name="end" id="end" v-model="end">

            <input type="submit" @click="sendData">
        </form>
        <!-- 
    {
        "title": "",
        "description": "Desc",
        "location": {"city": "City", "postalCode": "Code", "streetName": "Street"},
        "organiser": "Unknown",
        "start": 1000000000000,
        "end": 2000000000000
      } -->
    </dialog>

    <main>
        <h3>Want to make your own listing? click <a href="#" id="submission-form-btn" @click="visible = true">here</a>
        </h3>
    </main>
</template>


<style>
dialog {
    position: absolute;
    top: 10%;
    left: 10%;

    width: 80%;
    height: 80%;

    padding: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

form input {
    margin-bottom: 20px;
}

main {
    height: 100%;
    width: 100%;
    background-color: darkgray;

    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    display: flex;
    align-items: center;
    text-align: center;
}
</style>