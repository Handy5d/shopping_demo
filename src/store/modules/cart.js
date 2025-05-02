import { getCartList, changeCount, delSelect } from '@/api/cart'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    searchList (state, newList) {
      state.cartList = newList
    },
    JudgeState (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      if (goods) {
        goods.isChecked = !goods.isChecked
      }
    },
    isAllChoose (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    },
    changeCount (state, { goodsId, goodsNum }) {
      const obj = state.cartList.find(item => item.goods_id === goodsId)
      obj.goods_num = goodsNum
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('searchList', data.list)
    },
    async updateCartAction (context, obj) {
      const { goodsNum, goodsId, goodsSkuId } = obj
      context.commit('changeCount', {
        goodsId,
        goodsNum
      })
      await changeCount(goodsId, goodsNum, goodsSkuId)
    },
    async deleteCartAction (context) {
      const selCountList = context.getters.selCartList
      const cartIds = selCountList.map(item => item.id)
      await delSelect(cartIds)
      Toast('删除成功')
      context.dispatch('getCartAction')
    }
  },
  getters: {
    cartTotal (state) {
      return state.cartList.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item, index) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0).toFixed(2)
    },
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }
  }
}
