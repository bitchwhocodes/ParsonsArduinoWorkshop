char val;

void setup(){
  Serial.begin(9600);
}

void loop(){
  if (Serial.available()) 
  { // If data is available to read,
    val = Serial.read(); // read it and store it in val
    if(val=='1'){
      Serial.println("from arduino");
    }

  }

  delay(10); // Wait 10 milliseconds for next reading
}

