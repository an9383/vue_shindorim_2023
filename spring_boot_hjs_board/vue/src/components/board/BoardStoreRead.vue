<template>
  <div>
    <div class="container mt-3">
      <div class="container">
        <div class="row">
          <div class="card col-md-6 offset-md-3 offset-md-3">
            <h3 class="text-center">업데이트도 할수 있어요</h3>
            <div class="card-body">
              <div class="form-group">
                <label> Type </label>
                <select placeholder="type" class="form-control">
                  <option value="1">자유게시판</option>
                </select>
              </div>
              <div class="form-group">
                <label> Board ID </label>
                <input type="text" placeholder="bid" name="bid" class="form-control" v-model="state.board.bid" disabled readonly />
              </div>
              <div class="form-group">
                <label> 이름 </label>
                <input type="text" placeholder="bname" name="bname" class="form-control" v-model="state.board.bname" />
              </div>
              <div class="form-group">
                <label> 제목 </label>
                <input placeholder="btitle" name="btitle" class="form-control" v-model="state.board.btitle" />
              </div>
              <div class="form-group">
                <label> 내용 </label>
                <textarea placeholder="bcontent" name="bcontent" class="form-control" rows="5" v-model="state.board.bcontent" />
              </div>
              <div class="mt-3 d-flex justify-content-between">
                <button class="btn btn-success" @click="updateBoard">Update</button>
                <button class="btn btn-danger">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'
import BoardDataService from '@/services/BoardDataService'
import { useStore } from 'vuex'

export default {
  setup() {
    let state = reactive({
      board: {},
      submited: false
    })
    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const getBoard = (id) => {
      BoardDataService.get(id)
        .then((response) => {
          console.log(response.data)
          state.board = response.data
        })
        .catch((e) => {
          console.log(e)
        })
    }

    console.log(route.params.id)
    getBoard(route.params.id)

    const updateBoard = async () => {
      await store.dispatch('updateBoard', state)
      await store.dispatch('onClickPaging', store.state.current)

      console.log('라우트패스' + route.path)
      console.log('숫자제거' + route.path.replace(/[0-9]/g, ''))

      let path = route.path.replace(/[0-9]/g, '')
      const last = path.charAt(path.length - 1)

      if (last == '/') {
        path = path.slice(0, -1)
        console.log('라스트 제거' + path)
      }

      await router.push(path)
    }

    return { state, updateBoard }
  }
}
</script>

<style scoped></style>
