<script>
 import { Line } from 'vue-chartjs';

export default {
   extends: Line,
   props: ['data'],
   data() {
      return {
         axiosUrlCliente: 'https://api.brasil.io/v1/dataset/covid19/caso_full/data/?state=CE&city=Fortaleza',
         datacollection: {
            //Data to be represented on x-axis
            labels: [],
            datasets: [{
               type: 'bar',
               label: 'Casos confirmados',
               borderColor: '#F26E50',
               borderWidth: 3,
               pointBorderColor: '#F26E50',
               //Data to be represented on y-axis
               data: []
            },
            {
               label: 'Mortes confirmadas',
               type: 'bar',
               borderColor: '#F265E0',
               borderWidth: 3,
               pointBorderColor: '#F265E0',
               //Data to be represented on y-axis
               data: []
            }
            ]
         },
         //Chart.js options that controls the appearance of the chart
         options: {
            layout: {
               padding: {
                  left: 20,
                  right:20
               }
            },
            scales: {
               yAxes: [{
                  ticks: {
                     beginAtZero: true
                  },
                  gridLines: {
                     display: true
                  }
               }],
               xAxes: [{
                  gridLines: {
                     display: false
                  }
               }]
            },
            legend: {
               display: true
            },
            responsive: true,
            maintainAspectRatio: false
         }
      }
   },
    watch: {
      data: async function () {
         var collection = {                     
            labels: [],
            datasets: [{ data:  []},{ data:  []}]
         };
         await this.data.then((response) => {
            for(let i = 0; i < 52; i++) {
               if(response.data.results[i*7].new_confirmed >= 0 && response.data.results[i*7].new_deaths >= 0) {
                  collection.labels[i] = response.data.results[i*7].epidemiological_week;
                  collection.datasets[0].data[i] = response.data.results[i*7].new_confirmed;
                  collection.datasets[1].data[i] = response.data.results[i*7].new_deaths;
               } else {
                  let aux = (i+1)*7
                  collection.labels[i] = response.data.results[aux].epidemiological_week;
                  collection.datasets[0].data[i] = response.data.results[aux].new_confirmed;
                  collection.datasets[1].data[i] = response.data.results[aux].new_deaths;
               }
            }    
         })
         this.datacollection.labels = collection.labels.reverse()
         this.datacollection.datasets[0].data = collection.datasets[0].data.reverse()
         this.datacollection.datasets[1].data = collection.datasets[1].data.reverse()

         //renderChart function renders the chart with the datacollection and options object.
         this.renderChart(this.datacollection, this.options)
      }
   },
}
</script>
