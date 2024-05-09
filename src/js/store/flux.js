const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contactsList: [],
			agendas: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			API: async (endpoint, methods = 'GET', body = null) => {
				try {
					let params = null;
					if (methods != 'GET') {
						params = {
							method: methods,
							body: JSON.stringify(body),
							headers: {
								'Content-Type': 'application/json'
							}
						};
					}
					else if (methods == 'DELETE') {
						let params = null
					}

					const response = await fetch(`https://playground.4geeks.com/contact/agendas${endpoint}`, params);
					if (!response.ok) {
						throw new Error(`HTTP error! status: ${response.status}`);
					}
					return response;
				} catch (error) {
					console.error('Fetch error:', error);
				}
			},
			createAgenda: async () => {
				let actions = getActions();
				try {
					let resp = await actions.API('/bforti', 'POST')
					let data = await resp.json()

					return data
				} catch (error) {
					console.error('Error al crear la agenda:', error);
					return { error: error.message }

				}
			},
			getAllAgenda: async () => {
				let actions = getActions();

				try {
					let resp = await actions.API('?offset=0&limit=100');
					let data = await resp.json();
					setStore({ agendas: data.agendas });
					return data;
				} catch (error) {
					console.error('Error al obtener las agendas:', error);
					return { error: error.message }
				}
			},
			getAllContacts: async () => {
				let actions = getActions()
				try {
					let resp = await actions.API("/bforti/contacts")
					let data = await resp.json();
					setStore({ contactsList: data.contacts });
					return data;
				} catch (error) {
					console.error('Error al obtener los contactos:', error);
					return { error: error.message }

				}
			},
			createContact: async (name, phone, email, address) => {
				let actions = getActions();
				try {

					let resp = await actions.API('/bforti/contacts', 'POST', {
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					});
					let data = await resp.json();


					let resp2 = await actions.API("/bforti/contacts");
					let data2 = await resp2.json();


					setStore({ contactsList: data2.contacts });

					return data;
				} catch (error) {
					console.error('Error al postear un contacto:', error);
					return { error: error.message };
				}
			},
			updateContact: async (contact_id, name, phone, email, address) => {
				let actions = getActions();
				let store = getStore()

				try {
					let resp = await actions.API(`/bforti/contacts/${contact_id}`, 'PUT', {
						"name": `${name}`,
						"phone": `${phone}`,
						"email": `${email}`,
						"address": `${address}`
					})
					let data = await resp.json()
					let resp2 = await actions.API("/bforti/contacts");
					let data2 = await resp2.json();


					setStore({ contactsList: data2.contacts });

					return data
				} catch (error) {
					console.error('Error al actualizar el contacto:', error);
					return { error: error.message }
				}
			},
			deleteContact: async (contact_id) => {
				let actions = getActions();
				let store = getStore()
				try {
					let resp = await actions.API(`/bforti/contacts/${contact_id}`, 'DELETE')
					let data = await resp.json()
					let resp2 = await actions.API("/bforti/contacts");
					let data2 = await resp2.json();
			
					
					setStore({ contactsList: data2.contacts });
			

					return data
				} catch (error) {
					console.error('Error al eliminar el contacto:', error);
					return { error: error.message }

				}

			}
		}
	};
};

export default getState;
