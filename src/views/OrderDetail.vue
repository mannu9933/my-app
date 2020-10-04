<template>
  <div class="orderDetail">
      <div class="container">
        <h1 class="logo-font">Order Details</h1>
        <v-divider class="pb-4"></v-divider>
        <p>Order Detail for {{ $route.params.orderId }}
          <v-btn
            small
            tile
            color="success"
            @click="editStatusDialog = true"
          >
            <v-icon left>
              mdi-pencil
            </v-icon>
            Edit
          </v-btn>
          <v-dialog
            v-model="editStatusDialog"
            max-width="500px"
          >
            <form id="demo" @submit.prevent="onSubmit">
              <v-card>
                <v-card-title>
                  Update Status for {{ order.orderNumber }}
                </v-card-title>
                <v-card-text>
                  <v-select
                    :items="chooseStatus"
                    v-model="changeStatus"
                    label="Choose status"
                    item-value="text"
                  ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="warning"
                    text
                    @click="editStatusDialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="primary"
                    text
                    type="submit"
                  >
                    Update
                  </v-btn>
                </v-card-actions>
              </v-card>
            </form>
          </v-dialog>
          <router-link to="/">
          <v-btn
            x-small
            color="primary"
            class="float-right"
          >
            Go to my Home Page
          </v-btn>
        </router-link></p>
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
              :key="order.name"
            >
              <td><router-link :to="{ name: 'orders', params: { orderId: order.orderNumber }}">{{ order.orderNumber }}</router-link></td>
              <td>{{ order.name }}</td>
              <td>{{ order.numberOfItems }}</td>
              <td>{{ order.totalAmount }}</td>
              <td>
                <v-btn
                    v-if="order.status === 'Ready to serve'"
                    x-small
                    color="success"
                    dark
                >
                  {{ order.status }}
                </v-btn>
                <v-btn
                    v-else-if="order.status === 'Preparing'"
                    x-small
                    color="primary"
                    dark
                >
                  {{ order.status }}
                </v-btn>
                <v-btn
                    v-else
                    x-small
                    color="warning"
                    dark
                >
                  {{ order.status }}
                </v-btn>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
</template>
<script>
import {
  mapGetters,
  mapActions
} from 'vuex';

export default {
  name: 'OrderDetail',
  data () {
    return {
      editStatusDialog: false,
      changeStatus: [],
      chooseStatus: [
        { text: 'Order Received' },
        { text: 'Preparing' },
        { text: 'Ready to serve' },
      ],
    }
  },

  computed: {
    ...mapGetters('order',['orders', 'order']),
  },

  methods: {
    ...mapActions('order',['getOrder', 'updateOrder']),

    getProductItem(id) {
      this.getOrder(id);
    },

    onSubmit () {
      this.updateOrder({ id: this.order.orderNumber, status: this.changeStatus });
      this.editStatusDialog = false;
    }
  },

  created() {
    this.getProductItem(this.$route.params.orderId)
    this.changeStatus = this.order.status;
  }
}
</script>
