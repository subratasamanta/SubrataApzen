import { LightningElement,api,track } from 'lwc';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
import getAccount from '@salesforce/apex/SchoolLocationDetails.getAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import leafletResource from '@salesforce/resourceUrl/leaflet';



export default class leafletMap extends LightningElement {
    @track error;
    @track sliderval =1;
    @track distance = 1;
    @track map;
    @track currentCircle;
    @api recordId; // To capture current recordid
    renderedCallback() { // invoke the method when component rendered or loaded
                Promise.all([
                    loadStyle(this, leafletResource +'/leaflet.css'), // CSS File
                    loadScript(this, leafletResource + '/leaflet.js'),  // leaflet js file                   
                ])
                .then(() => { 
                    getAccount({rad : this.distance, accId : this.recordId})
                    .then(result => {
                        debugger;
                        console.log('====>'+JSON.stringify(result));
                        for(let loc = 0 ; loc < result.length ; loc++){
                            console.log('---->'+JSON.stringify(result[loc].location.Latitude));
                            this.error = undefined;
                            const mapRoot = this.template.querySelector(".map-root");
                            this.distance = this.distance * 1000;
                            this.map = L.map(mapRoot).setView([result[loc].location.Latitude, result[loc].location.Longitude], 14);
                            this.currentCircle  = L.circle([result[loc].location.Latitude, result[loc].location.Longitude], {radius:  this.distance}).addTo( this.map);
                            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                            maxZoom: 18,
                            id: 'mapbox/streets-v11',
                            accessToken: 'pk.eyJ1Ijoic2ZkY3N1YnJhdGEiLCJhIjoiY2s0bnJucHp0MTczZTNkbDVrMG1oaTF5YyJ9.ZWBX03Wpz3aHoaVnKjiClA'}).addTo( this.map);
                        }
                    })
                    .catch(error => {            
                        console.log(error);
                    });                   

                });
                
    }
    handleChange(event){
        var greenIcon = L.icon({
            iconUrl: 'https://apzen-tech-dev-ed--c.ap7.visual.force.com/resource/1577508515000/Girl',
            shadowUrl: 'leaf-shadow.png',
        
            iconSize:     [30, 26], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });
        this.map.removeLayer(this.currentCircle );
        this.distance =event.target.value * 1000;     
        
        L.marker([50.5, 30.5],{icon: greenIcon}).addTo(this.map)
        .bindPopup('Girl School')
        .openPopup();
        L.marker([50.05, 30.5]).addTo(this.map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
        L.marker([50.05, 30.35]).addTo(this.map);
        L.marker([51.05, 30.15]).addTo(this.map);
        this.currentCircle = L.circle([50.5, 30.5], {radius:  this.distance}).addTo( this.map)

    }
    callApexMethod(distance){
        getAccount({rad : distance, accId : this.recordId})
        .then(result => {
            console.log('====>'+JSON.stringify(result));
            for(let loc = 0 ; loc < result.length ; loc++){
                this.error = undefined;
                const mapRoot = this.template.querySelector(".map-root");
                this.distance = this.distance * 1000;
                this.map = L.map(mapRoot).setView([loc.location.Latitude, loc.location.Longitude], 14);
                this.currentCircle  = L.circle([loc.location.Latitude, loc.location.Longitude], {radius:  this.distance}).addTo( this.map);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                accessToken: 'pk.eyJ1Ijoic2ZkY3N1YnJhdGEiLCJhIjoiY2s0bnJucHp0MTczZTNkbDVrMG1oaTF5YyJ9.ZWBX03Wpz3aHoaVnKjiClA'}).addTo( this.map);
            }
        })
        .catch(error => {            
            console.log(error);
        });  
    }

}