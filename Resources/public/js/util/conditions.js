

export function hasConditions(field) {
  if (field.conditionField && field.conditionValue) {
    if (typeof field.conditionField.forEach === 'function' && typeof field.conditionValue.forEach === 'function') {
      if (field.conditionField.length > 0) {
        if (field.conditionField.length === field.conditionValue.length) {
          return true;
        }
      }
    }
  }
  return false;
}

export function checkConditions(field, data) {
  let render = true;
  field.conditionField.forEach(function(element, index) {
    if (typeof data[element] === 'undefined') {
      render = false;
    } else if (data[element] !== null && !data[element].value &&
      (String(data[element]) !== String(field.conditionValue[index]))) {
      render = false;
    } else if (data[element] && data[element].value &&
      (String(data[element].value) !== String(field.conditionValue[index]))) {
      render = false;
    } else if (data[element] === null && field.conditionValue[index] !== null) {
      render = false;
    }
  }, this);

  return render;
}

export default function checkIfFieldIsRendered(field, data) {
  if (hasConditions(field)) {
    return checkConditions(field, data);
  } else {
    return true;
  }
}