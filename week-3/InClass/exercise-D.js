function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }

  function UpperFunction(arr){
      let result = arr.map(
          (srt) => {return srt.toUpperCase()
        })
      return result.sort();
  }

  let result = abracaFunction(UpperFunction);
  console.log(result);