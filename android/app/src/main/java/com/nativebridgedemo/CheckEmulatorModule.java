package com.nativebridgedemo;

import com.facebook.infer.annotation.SuppressLint;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.os.Build;
import android.util.Log;


public class CheckEmulatorModule extends ReactContextBaseJavaModule {
   CheckEmulatorModule(ReactApplicationContext context) {
       super(context);
   }
   @Override
      public String getName() {
   return "DeviceDetails";
}


   @ReactMethod
   public void isEmulator(Promise p) {
      p.resolve(isEmulatorSync());
   }

   @SuppressLint("HardwareIds")
   @ReactMethod(isBlockingSynchronousMethod = true)
   public boolean isEmulatorSync() {
      return Build.FINGERPRINT.startsWith("generic")
              || Build.FINGERPRINT.startsWith("unknown")
              || Build.MODEL.contains("google_sdk")
              || Build.MODEL.contains("Emulator")
              || Build.MODEL.contains("Android SDK built for x86")
              || Build.MANUFACTURER.contains("Genymotion")
              || (Build.BRAND.startsWith("generic") && Build.DEVICE.startsWith("generic"))
              || "google_sdk".equals(Build.PRODUCT);
   }

}