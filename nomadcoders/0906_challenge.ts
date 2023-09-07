// LocalStorage API

// Use abstract classes and generics.
// 추상화 클래스와 제네릭을 사용하세요.
// Usage:

// localStorage.setItem(<key>, <value>)
// localStorage.getItem(<key>)
// localStorage.clearItem(<key>)
// localStorage.clear()

interface _Storage<T> {
  [key: string]: T;
}

abstract class StorageClass<T> {
  protected storage: _Storage<T> = {};

  abstract setItem(key: string, value: T): T;
  abstract getItem(key: string): T;
  abstract clearItem(key: string): void;
  abstract clear(): void;
}

class LocalStorage<T> extends StorageClass<T> {
  setItem(key: string, value: T): T {
    return (this.storage[key] = value);
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string): void {
    delete this.storage[key];
  }
  clear(): void {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.setItem("key", "value");
console.log(stringsStorage.getItem("key"));
console.log(stringsStorage);

// -----------------------------------------------------------
// Geolocation API:
// overloading을 사용하세요.

// GeoLocation에 사용될 필드와 메소드에 적용될 수 있는 타입들을 정의해보세요.
// overloading을 적용될 수 있도록 GeoLocation API에 있는 기존 메소드의 이름을 쓰되 새로 만든 타입을 중복 시켜 적용해보세요.
// 사용법에 있는 getCurrentPosition(), watchPosition() 안에 Fn이 붙어 있는 파라미터들은 콜백 함수를 의미하며 나머지들은 전부 객체를 가리킵니다. 이에 유의하여 타입을 설정해보시기 바랍니다.

// geolocation.getCurrentPosition(successFn);
// geolocation.getCurrentPosition(successFn, errorFn);
// geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
// geolocation.watchPosition(success);
// geolocation.watchPosition(success, error);
// geolocation.watchPosition(success, error, options);
// geolocation.clearWatch(id);

// Geolocation.getCurrentPosition() 보안 컨텍스트
// 기기의 현재 위치를 파악하고 데이터가 포함된 GeolocationPosition 객체를 반환합니다.

// Geolocation.watchPosition() 보안 컨텍스트
// 장치 위치가 변경될 때마다 호출할 새로 설정된 콜백 함수를 나타내는 긴 값을 반환합니다.

// Geolocation.clearWatch() 보안 컨텍스트
// watchPosition()을 사용하여 이전에 설치된 특정 핸들러를 제거합니다.

interface GeoPosition {
  coords: {
    latitude: number;
    longitude: number;
    altitude?: number;
    accuracy?: number;
    altitudeAccuracy?: number;
    heading?: number;
    speed?: number;
  };
  timestamp: number;
}

interface GeoPositionError {
  code: number;
  message: string;
}

interface GeoOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

type GeoSuccessCallback = (position: GeoPosition) => void;
type GeoErrorCallback = (error: GeoPositionError) => void;

class _Geolocation {
  getCurrentPosition(successCallback: GeoSuccessCallback): void;
  getCurrentPosition(successCallback: GeoSuccessCallback,errorCallback: GeoErrorCallback): void;
  getCurrentPosition(successCallback: GeoSuccessCallback,errorCallback: GeoErrorCallback,options: GeoOptions): void;


  watchPosition(successCallback: GeoSuccessCallback,errorCallback?: GeoErrorCallback,options?: GeoOptions
  ): number {
    // Implement the logic to watch for position changes and call success or error callback as needed.
    // Return a unique identifier (number) for this watch operation.
    return 0; // Placeholder value, should return a unique identifier.
  }

  clearWatch(id: number): void {
    // Implement the logic to clear the watch identified by the given id.
  }
}

const geolocation = new Geolocation();
