export default {
  LoadCart(state) {
    if (process.client) {
      let cart = localStorage.getItem("myCart");

      if (cart) state.cart = JSON.parse(cart);
    }
  },

  AddToCart(state, product) {
    let itemFound = state.cart.find((p) => p.product.id === product.id);

    if (!itemFound) state.cart.push({ product, quantity: 1 });
    else itemFound.quantity += 1;

    if (process.client) {
      localStorage.setItem("myCart", JSON.stringify(state.cart));
    }

    this.$swal({
      toast: true,
      text: "Berhasil memasukkan ke keranjang!",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
  },

  DecreaseItemCount(state, index) {
    let item = state.cart[index];

    if (!item) return;
    if (item.quantity == 1) state.cart.splice(index, 1);
    else item.quantity -= 1;

    this.$swal({
      toast: true,
      text: "Berhasil mengurangi jumlah produk!",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    if (process.client) {
      localStorage.setItem("myCart", JSON.stringify(state.cart));
    }
  },

  IncreaseItemCount(state, index) {
    let item = state.cart[index];

    if (!item) return;
    item.quantity += 1;

    this.$swal({
      toast: true,
      text: "Berhasil mengurangi jumlah produk!",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    if (process.client) {
      localStorage.setItem("myCart", JSON.stringify(state.cart));
    }
  },
  RemoveCartItem(state, index) {
    state.cart.splice(index, 1);

    this.$swal({
      toast: true,
      text: "Berhasil menghapus dari keranjang!",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    if (process.client) {
      localStorage.setItem("myCart", JSON.stringify(state.cart));
    }
  },
  ClearCart(state) {
    state.cart = [];

    this.$swal({
      toast: true,
      text: "Berhasil membersihkan keranjang!",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });

    if (process.client) {
      localStorage.removeItem("myCart");
    }
  },
};
