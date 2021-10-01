<template>
  <div id="app" class="container">
    <h2 class="text-center"><b>Income Expense Application</b></h2>
    <div class="row">
      <div class="col-md-12">
        <income />
        <income-category />
        <expense-category />
      </div>
    </div>
  </div>
</template>

<script>
  import Income from './components/income/Income.vue'
  import IncomeCategory from './components/income/IncomeCategory.vue'
  import ExpenseCategory from './components/expense/ExpenseCategory.vue'

  export default {
    name: 'App',
    components: {
      IncomeCategory,
      ExpenseCategory,
      Income
    }
  }
</script>

<style>

</style>