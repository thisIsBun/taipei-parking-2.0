import Swal from "sweetalert2";

const TOKEN_NAME = "uid";

export const setAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export function twd97_to_latlng($x, $y) {
  var pow = Math.pow,
    M_PI = Math.PI;
  var sin = Math.sin,
    cos = Math.cos,
    tan = Math.tan;
  var $a = 6378137.0,
    $b = 6356752.314245;
  var $lng0 = (121 * M_PI) / 180,
    $k0 = 0.9999,
    $dx = 250000,
    $dy = 0;
  var $e = pow(1 - pow($b, 2) / pow($a, 2), 0.5);

  $x -= $dx;
  $y -= $dy;

  var $M = $y / $k0;

  var $mu =
    $M /
    ($a *
      (1.0 -
        pow($e, 2) / 4.0 -
        (3 * pow($e, 4)) / 64.0 -
        (5 * pow($e, 6)) / 256.0));
  var $e1 =
    (1.0 - pow(1.0 - pow($e, 2), 0.5)) / (1.0 + pow(1.0 - pow($e, 2), 0.5));

  var $J1 = (3 * $e1) / 2 - (27 * pow($e1, 3)) / 32.0;
  var $J2 = (21 * pow($e1, 2)) / 16 - (55 * pow($e1, 4)) / 32.0;
  var $J3 = (151 * pow($e1, 3)) / 96.0;
  var $J4 = (1097 * pow($e1, 4)) / 512.0;

  var $fp =
    $mu +
    $J1 * sin(2 * $mu) +
    $J2 * sin(4 * $mu) +
    $J3 * sin(6 * $mu) +
    $J4 * sin(8 * $mu);

  var $e2 = pow(($e * $a) / $b, 2);
  var $C1 = pow($e2 * cos($fp), 2);
  var $T1 = pow(tan($fp), 2);
  var $R1 =
    ($a * (1 - pow($e, 2))) / pow(1 - pow($e, 2) * pow(sin($fp), 2), 3.0 / 2.0);
  var $N1 = $a / pow(1 - pow($e, 2) * pow(sin($fp), 2), 0.5);

  var $D = $x / ($N1 * $k0);

  var $Q1 = ($N1 * tan($fp)) / $R1;
  var $Q2 = pow($D, 2) / 2.0;
  var $Q3 =
    ((5 + 3 * $T1 + 10 * $C1 - 4 * pow($C1, 2) - 9 * $e2) * pow($D, 4)) / 24.0;
  var $Q4 =
    ((61 +
      90 * $T1 +
      298 * $C1 +
      45 * pow($T1, 2) -
      3 * pow($C1, 2) -
      252 * $e2) *
      pow($D, 6)) /
    720.0;
  var $lat = $fp - $Q1 * ($Q2 - $Q3 + $Q4);

  var $Q5 = $D;
  var $Q6 = ((1 + 2 * $T1 + $C1) * pow($D, 3)) / 6;
  var $Q7 =
    ((5 - 2 * $C1 + 28 * $T1 - 3 * pow($C1, 2) + 8 * $e2 + 24 * pow($T1, 2)) *
      pow($D, 5)) /
    120.0;
  var $lng = $lng0 + ($Q5 - $Q6 + $Q7) / cos($fp);

  $lat = ($lat * 180) / M_PI;
  $lng = ($lng * 180) / M_PI;

  return {
    lat: $lat,
    lng: $lng,
  };
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
export const circleOptions = {
  closeOptions: {
    ...defaultOptions,
    zIndex: 3,
    fillOpacity: 0.05,
    strokeColor: "#8BC34A",
    fillColor: "#8BC34A",
  },
  middleOptions: {
    ...defaultOptions,
    zIndex: 2,
    fillOpacity: 0.05,
    strokeColor: "#FBC02D",
    fillColor: "#FBC02D",
  },
  farOptions: {
    ...defaultOptions,
    zIndex: 1,
    fillOpacity: 0.05,
    strokeColor: "#FF5252",
    fillColor: "#FF5252",
  },
};

const SAVE_NAME = "save-park";
export function writeSaveListLocalStorage(list) {
  window.localStorage.setItem(SAVE_NAME, JSON.stringify(list));
}

export const getSaveListLocalStorage = () => {
  return JSON.parse(window.localStorage.getItem(SAVE_NAME));
};

export const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  icon: "success",
});

export const gtag = function () {
  window.dataLayer.push(arguments);
};