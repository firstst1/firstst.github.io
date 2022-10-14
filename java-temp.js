document.addEventListener('DOMContentLoaded',function (){
    fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        const name_2      = data[0].name;
        const type_2      = data[0].type;
        const unit_2      = data[0].unit;
        const range_2     = data[0].range;
        const plantsite_2 = data[0]["plant-site"];
        const value_2     = data[0].value;

        const name_4      = data[1].name;
        const type_4      = data[1].type;
        const unit_4      = data[1].unit;
        const range_4     = data[1].range;
        const plantsite_4 = data[1]["plant-site"];
        const value_4     = data[1].value;

        const name_6      = data[2].name;
        const type_6      = data[2].type;
        const unit_6      = data[2].unit;
        const range_6     = data[2].range;
        const plantsite_6 = data[2]["plant-site"];
        const value_6     = data[2].value;

        document.querySelector('.name_1').innerHTML     = `:&nbsp;&nbsp;${name_2} `;
        document.querySelector('.type_1').innerHTML     = `:&nbsp;&nbsp;${type_2} `;
        document.querySelector('.unit_1').innerHTML     = `:&nbsp;&nbsp;${unit_2} `;
        document.querySelector('.range_1').innerHTML    = `:&nbsp;&nbsp;${range_2} `;
        document.querySelector('.plantsite_1').innerHTML= `:&nbsp;&nbsp;${plantsite_2} `;
        document.querySelector('.value_1').innerHTML    = `:&nbsp;&nbsp;${value_2} `;

        document.querySelector('.name_3').innerHTML     = `:&nbsp;&nbsp;${name_4} `;
        document.querySelector('.type_3').innerHTML     = `:&nbsp;&nbsp;${type_4} `;
        document.querySelector('.unit_3').innerHTML     = `:&nbsp;&nbsp;${unit_4} `;
        document.querySelector('.range_3').innerHTML    = `:&nbsp;&nbsp;${range_4} `;
        document.querySelector('.plantsite_3').innerHTML= `:&nbsp;&nbsp;${plantsite_4} `;
        document.querySelector('.value_3').innerHTML    = `:&nbsp;&nbsp;${value_4} `;
        
        document.querySelector('.name_5').innerHTML     = `:&nbsp;&nbsp;${name_6} `;
        document.querySelector('.type_5').innerHTML     = `:&nbsp;&nbsp;${type_6} `;
        document.querySelector('.unit_5').innerHTML     = `:&nbsp;&nbsp;${unit_6} `;
        document.querySelector('.range_5').innerHTML    = `:&nbsp;&nbsp;${range_6} `;
        document.querySelector('.plantsite_5').innerHTML= `:&nbsp;&nbsp;${plantsite_6} `;
        document.querySelector('.value_5').innerHTML    = `:&nbsp;&nbsp;${value_6} `;
    });
});
