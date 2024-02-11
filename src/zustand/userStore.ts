import { create } from "zustand";
import { UserStore } from "src/zustand/userStore.type.ts";

export const useUserStore = create<UserStore>((set) => ({
    user: {
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        company: "",
        job: "",
        description: "",
        date: "",
        image: "",
    },
    setUser: (user) => set({ user }),
}));
