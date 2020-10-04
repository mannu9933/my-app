<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Order No.</th>
                <th class="text-left">Customer Name</th>
                <th class="text-left">No. of Items ordered</th>
                <th class="text-left">Total amount</th>
                <th class="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in orders"
                :key="item.name"
                @click="goToDetail(item.orderNumber)"
                class="pointer"
              >
                <td><a>{{ item.orderNumber }}</a></td>
                <td>{{ item.name }}</td>
                <td>{{ item.numberOfItems }}</td>
                <td>{{ item.totalAmount }}</td>
                <td>
                  <v-btn
                    v-if="item.status === 'Ready to serve'"
                    x-small
                    color="success"
                    dark
                  >
                    {{ item.status }}
                  </v-btn>
                  <v-btn
                    v-else-if="item.status === 'Preparing'"
                    x-small
                    color="primary"
                    dark
                  >
                    {{ item.status }}
                  </v-btn>
                  <v-btn
                    v-else
                    x-small
                    color="warning"
                    dark
                  >
                    {{ item.status }}
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  name: 'OrderList',
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'orders', params: { orderId: id } });
    }
  }
}
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
