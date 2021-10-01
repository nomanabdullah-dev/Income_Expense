<template>
    <div>
        <h2>Income</h2>
        <div class="row" style="margin-top:30px">
            <form>
                <div class="form-group col-md-12">
                        <select v-model="form.income_category_id" class="form-control" id="type">
                          <option value="">Select Category</option>
                          <option v-for="(cat, i) in categories" :value="cat.id" :key="i">
                            {{ cat.name }}
                          </option>
                        </select>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Enter particular" v-model="form.particular">
                        <input type="hidden" v-model="form.particular">
                        <input type="hidden" v-model="form.id">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Enter amount" v-model="form.amount">
                        <input type="hidden" v-model="form.amount">
                    </div>
                    <div class="col-md-4">
                        <button type="submit" @click.prevent="createOrUpdate" class="btn btn-success mt-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                        <th>Particular</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(income, index) in incomes" :key="index">
                        <td>{{ income.id }}</td>
                        <td>{{ income.incomeCategory.name }}</td>
                        <td>{{ income.particular}}</td>
                        <td>{{ income.amount }}</td>
                        <td>
                            <button @click.prevent="" class="btn btn-success btn-sm">Edit</button>
                            <button @click.prevent="" class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                incomes: {
                    id: '',
                    particular: '',
                    amount: '',
                    income_category_id: '',
                    incomeCategory: {
                      id: '',
                      name: ''
                    }
                },
                categories: {},
                form: {
                    id: '',
                    particular: '',
                    amount: '',
                    income_category_id: '',
                }
            }
        },
        mounted() {
            this.getIncome(),
            this.getIncomeCategories()
        },
        methods: {
          getIncomeCategories() {
                axios.get('http://127.0.0.1:3333/income-category')
                    .then(res => {
                        console.log(res.data)
                        this.categories = res.data.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
          getIncome() {
            axios.get('http://127.0.0.1:3333/income')
                .then(res => {
                    console.log(res.data)
                    this.incomes = res.data.data
                })
                .catch(err => {
                    console.log(err)
                })
          },
          createOrUpdate() {
            if(this.form.id == ''){
                  this.createIncome()
              } else {
                  this.updateIncome()
              }
          },
          createIncome() {
                axios.post('http://127.0.0.1:3333/income', {
                    incomeCategoryId: this.form.income_category_id,
                    particular: this.form.particular,
                    amount: this.form.amount})
                    .then(res => {
                        this.form.particular = ''
                        this.form.amount = ''
                        this.form.particular = ''
                        this.income_category_id = ''
                        console.log(res.data)
                        this.getIncomeCategories()
                        this.getIncome()
                    })
                    .catch(err => {
                        console.log(err)
                    })
          },
          updateIncome(){}
        },
        
    }
</script>

<style lang="scss" scoped>

</style>