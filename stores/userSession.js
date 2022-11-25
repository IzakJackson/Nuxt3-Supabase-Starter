import { defineStore } from 'pinia'

export const useUserSessionStore = defineStore('userSession', {
  state: () => ({
    user: [],
    username: "",
    first_name: "",
    last_name: "",
    avatar_url: ""
  }),
  actions: {
    async getUser() {
      const data = useSupabaseUser();
      this.user = data.value
    },
    async getProfile() {
      const client = useSupabaseClient();
      let { data } = await client
        .from("profiles")
        .select(`username, avatar_url, first_name, last_name`)
        .eq("id", this.user.id)
        .maybeSingle();
      if (data) {
        this.username = data.username;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
        this.avatar_url = data.avatar_url;
      }
    },
  }
})