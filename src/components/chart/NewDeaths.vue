<script>
 import { Line } from 'vue-chartjs';

export default {
   extends: Line,
   props: ['data'],
   data() {
      return {
         datacollection: {
            //Data to be represented on x-axis
            labels: [],
            datasets: [{
               label: 'Óbitos confirmados',
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
                  left: 10,
                  right:10
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
            let aux = 0; 
            for(let i = 0; i < 30; i++) {
               if(response.data.results[aux].new_deaths == 0 && response.data.results[aux+1].last_available_date == response.data.results[aux].last_available_date) {
                  do {
                     aux++
                  } while(response.data.results[aux].new_deaths == 0 && response.data.results[aux+1].last_available_date == response.data.results[aux].last_available_date)
               }
                  collection.labels[i] = response.data.results[aux].last_available_date;
                  collection.datasets[0].data[i] = response.data.results[aux].new_deaths;
                  aux++;
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
