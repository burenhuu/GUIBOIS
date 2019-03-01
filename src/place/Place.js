class Place {

   constructor(...) {
      ...
   }

   hashCode() {
      // ??? test this
      return this.latitude | (this.longitude << 16);
   }
}

export default Place;
