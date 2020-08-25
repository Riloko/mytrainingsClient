export const pagging = {
    state: {
        trainings: [],
        trainingsCount: 0,
        trainingsPageLimit: 8,
        limitsArr: [ 8, 10, 12, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50 ]
    },
    getters: {
        TRAININGSCOUNT: state => {
            return state.trainingsCount;
        },
        TRAININGS: state => {
            return state.trainings;
        },
        TRAININGSPAGELIMITS: state => {
            return state.trainingsPageLimit;
        },
        LIMITSARR: state => {
            return state.limitsArr;
        }
    },
    mutations: {
        SET_TRAININGS_PAGE_LIMITS: (state, payload) => {
            state.trainingsPageLimit = payload;
        },
        SET_TRAININGS: (state, payload) => {
            state.trainings = payload;
        },
        SET_TRAININGS_COUNT: (state, payload) => {
            state.trainingsCount = payload;
        }
    },
    actions: {
        GET_TRAININGS: async (context, payload = 1) => {
            const limit = context.state.trainingsPageLimit;
            const offset = (payload * context.state.trainingsPageLimit) - context.state.trainingsPageLimit;
            const URLbase = "http://localhost:3002";
            let trainings = await fetch(`${URLbase}/dashboard/get_trainings`, {
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'multipart/form-data',
                'Origin': 'http://localhost:8080'                   
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({limit, offset})
            })
                .then(res => res.json())
                .then(body => body)
                .catch(err => console.log(err))
            
            context.commit("SET_TRAININGS", trainings)
        },

        GET_TRAININGS_COUNT: async (context) => {
            const URLbase = "http://localhost:3002";  
            
            let count = await fetch(`${URLbase}/dashboard/get_trainings_limit`, {
                method: 'POST',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'multipart/form-data',
                'Origin': 'http://localhost:8080'                   
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer'
            })
                .then(res => res.json())
                .then(body => body)
                .catch(err => console.log(err))                

                context.commit("SET_TRAININGS_COUNT", count);
        },

        UPDATE_TRAININGS_PAGE_LIMITS: (context, payload) => {
            context.commit('SET_TRAININGS_PAGE_LIMITS', payload);
        }
    }
}