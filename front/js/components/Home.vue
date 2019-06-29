<template>
    <div>
        <h4>Home</h4>
        <button @click="click()">
            {{a}}
        </button>
        <div v-for="item in array" class="array">
            <table>
                <tbody>
                    <tr>
                        <th>Название</th>
                        <th>{{item.name}}</th>
                    </tr>
                    <tr>
                        <th>Стоимость</th>
                        <td>{{item.price}}</td>
                    </tr>
                    <tr>
                        <th>Описание</th>
                        <td>{{item.description}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <router-link to="/hello">Перейти к Hello</router-link>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                a: 'asd',
                count: 0,
                array: []
            }
        },
        methods: {
            click() {
                console.log(this.a);
                this.array.push({
                    name: 'Товар',
                    price: Math.round(Math.random()*1000),
                    description: 'asdasd asd asdas dasda sdasda sdasd asdas dasdas '
                });
            }
        }
    }
</script>

<style scoped>
    .array {
        border: 1px solid grey;
        box-shadow: 0 0 10px 10px rgba(0,0,0,0.3);
        border-radius: 5px;
        padding: 15px;
        margin: 10px;
        width: 400px;
    }
</style>