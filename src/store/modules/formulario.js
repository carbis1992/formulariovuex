export const formularioModule = {
    namespaced: true,
    state: {
        formData: [],
        userData: [],
        loading: false,
    },
    mutations: {
        setLoading: (state, loading) => {
            state.loading = loading;
        },
        saveFormData: (state, formData) => {
            state.formData = formData;
        },
        setFormData: (state, formData) => {
            state.formData = formData;
          },
    },
    getters: {
        getLoading: (state) => {
          return state.loading;
        },
        getFormData: (state) => {
          return state.formData;
        }
      },
        actions: {
            // enviar el formulario a la api
            saveFormData: (context, formData) => {
              context.commit("setLoading", true);
              fetch('https://649e051f9bac4a8e669e87a4.mockapi.io/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
              })
                .then(response => response.json())
                .then(responseData => {
                  context.commit('saveFormData', responseData);
                  context.commit("setLoading", false);
                  console.log('Success:', responseData);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            },
            // obtener los datos de la api
            fetchFormData: (context) => {
                return fetch('https://649e051f9bac4a8e669e87a4.mockapi.io/users')
                  .then(response => response.json())
                  .then(formData => {
                    context.commit('setFormData', formData);
                    console.log('Form data fetched:', formData);
                  })
                  .catch(error => {
                    console.error('Error fetching form data:', error);
                  });
              },
          }         
}