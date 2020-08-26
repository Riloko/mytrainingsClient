export const exercises = {
    state: {
        exercises: [],
        exercisesCount: 0,
        exercisesPageLimit: 8
    },
    getters: {
        EXERCISESCOUNT: state => {
            return state.exercisesCount;
        },
        EXERCISES: state => {
            return state.exercises;
        },
        EXERCISESPAGELIMITS: state => {
            return state.exercisesPageLimit;
        }        
    },
    mutations: {
        SET_EXERCISES_PAGE_LIMITS: (state, payload) => {
            state.exercisesPageLimit = payload;
        },
        SET_EXERCISES: (state, payload) => {
            state.exercises = payload;
        },
        SET_EXERCISES_COUNT: (state, payload) => {
            state.exercisesCount = payload;
        }
    },
    actions: {
        GET_EXERCISES: async (context, id) => {
            const URLbase = "http://localhost:3002";
            let exercises = await fetch(`${URLbase}/dashboard/training/${id}`, {
                method: 'GET',
                mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin', 
                headers: {
                'Origin': 'http://localhost:8080'                   
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer'
            })
                .then(res => res.json())
                .then(body => body)
                .catch(err => console.log(err))
            
            context.commit("SET_EXERCISES", exercises);
        },
        CLEAR_EXERCISES: (context) => {
            context.commit("SET_EXERCISES", []);
        }
    }
};