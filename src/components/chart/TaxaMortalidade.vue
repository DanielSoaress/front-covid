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
               label: 'Taxa de mortalidade(%)',
               borderColor: '#F26E50',
               borderWidth: 3,
               pointBorderColor: '#F26E50',
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
            datasets: [{ data:  []}]
         };
         await this.data.then((response) => {
            for(let i = 0; i < 12; i++) {
               collection.labels[i] = response.data.results[i*30].last_available_date;
               collection.datasets[0].data[i] = parseFloat((response.data.results[i*30].last_available_death_rate * 100)).toFixed(2);
            }    
         })
         this.datacollection.labels = collection.labels.reverse()
         this.datacollection.datasets[0].data = collection.datasets[0].data.reverse()
         //renderChart function renders the chart with the datacollection and options object.
         this.renderChart(this.datacollection, this.options)
      }
   },
}
</script>
