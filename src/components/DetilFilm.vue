<template>
<div>

<!-- about section -->
<section id="DetilFilm">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 text-center">
        <div class="section-title">
          <h1 class="heading bold">About Us</h1>
          <hr>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">

      <div class="large-12 medium-12 small-12 column respect">
    <p class="blinote">Bliblioneers<span class="cbli">/bli.bli.o.neers/</span></p>
    <p></p>
</div>  
<br/>
<br/>

<div class="large-12 medium-12 small-12 respect">
    <div class="large-6 medium-12 small-12 columns blitext">
        <p>Bliblioneers are the very core of Blibli.com existence, the greatest strength that makes Blibli.com what it is today. Together, we take strides to make cutting-edge ideas and innovation to live our life purpose. As the DNA of every Bliblioneers, we let RESPECT to be our guidelines to achieve what we aspire. We make every judgment and call through RESPECT. We honor fellow Bliblioneers through their RESPECT. And we find the next Bliblioneers through the DNA of RESPECT that we find within them.</p>
        <p></p>
        <br/>
        <br/>
        <br/>
    </div>
</div>

      </div>
      <div class="col-md-6 col-sm-12">

        <h1 class="heading bold">RESPECT</h1>
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li class="active"><a href="#R" aria-controls="design" role="tab" data-toggle="tab">R</a></li>
          <li><a href="#E" aria-controls="mobile" role="tab" data-toggle="tab">E</a></li>
          <li><a href="#S" aria-controls="social" role="tab" data-toggle="tab">S</a></li>
          <li><a href="#P" aria-controls="social" role="tab" data-toggle="tab">P</a></li>
          <li><a href="#Ex" aria-controls="social" role="tab" data-toggle="tab">E</a></li>
          <li><a href="#C" aria-controls="social" role="tab" data-toggle="tab">C</a></li>
          <li><a href="#T" aria-controls="social" role="tab" data-toggle="tab">T</a></li>
        </ul>
        <!-- tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="R">
            <p><h3>Risk Taking</h3>Don’t overthink. As long as you don’t move backwards or compliantly remain on the same spot, just do it! We treasure calculated risk taker.ExcellenceBe an overachiever because complacency is a pitfall. History proved itself that only paranoid </p>
          </div>
          <div role="tabpanel" class="tab-pane" id="E">
            <p><h3>Excellence</h3> Be an overachiever because complacency is a pitfall. History proved itself that only paranoid survives.</p>
          </div>
          <div role="tabpanel" class="tab-pane" id="S">
            <p><h3>Serving</h3> Focus on what to give than to receive and be humble. With it, neither praise nor disgrace can touch you.</p>
          </div>
           <div role="tabpanel" class="tab-pane" id="P">
            <p><h3>Passionate and Proud</h3> Passion is the fuel to accomplish the unimaginable. Stay true to it and be proud of what you build.</p>
          </div>
          <div role="tabpanel" class="tab-pane" id="Ex">
            <p><h3>Employee’s Great Place to Work</h3> Bliblioneers build relationship through open communications. They criticize hard, but support harder. They learn from one another and accept each other’s imperfections.</p>
          </div>
          <div role="tabpanel" class="tab-pane" id="C">
            <p><h3>Customer Focus </h3>Focus on taking care of customers and work backwards. The formula has always been the same: ME < TEAM < COMPANY < CUSTOMERS</p>
          </div>
          <div role="tabpanel" class="tab-pane" id="T">
            <p><h3>Teamwork</h3> Build a synergy out of trust. Let your surplus exceeds others deficits and vice versa.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</template>

<script>
export default {
  name: 'DetilFilm',
  data () {
    return {
      statePage: 'DetilFilm'
    }
  },
  methods: {
    chStatePageTo (newState) {
      this.statePage = newState
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
