var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default{

    deliver: function(){
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name:`${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            
            address:{
                postalcode:'13231090',
                street:'Rua Osvaldo Fernandes Chagas',
                number: '134',
                details:'4351',
                district:'Jardim São Conrado',
                city_state:'Campo Limpo Paulista/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}