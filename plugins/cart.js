export default function ({ store }, inject) {
  store.commit("cart/LoadCart");

  inject("formatMoney", (money) => {
    return new Intl.NumberFormat("id-ID", {
      currency: "IDR",
      style: "currency",
    }).format(money);
  });
}
