
window.onload = function() {

	var chooseFileInput = document.getElementById('choose-file__input');
	var addText = document.querySelector('.add-text');
	var fieldValue = document.querySelector('.progress-value');	

	chooseFileInput.addEventListener('change', loadFile);
	
	function loadFile() {
		var pathFile = this.value;


	//имитация загрузки файла
		var formProgressBar = document.querySelector('.form-progress-bar');
		var progressBar = document.querySelector('.progress-bar');
		var maxValue = progressBar.getAttribute('max');
		var valueProgress = progressBar.value = 0;
		

		addText.innerText = 'Идет загрузка файла...';
		formProgressBar.style.display = 'block';
		function getProgress() {
			valueProgress += 1;
			progressBar.value = valueProgress;
				
			fieldValue.innerText = valueProgress + '%';
			if (valueProgress == maxValue) {
				clearInterval(timerId);
				setTimeout(function() {
					var arrFileName = pathFile.split('\\');
					var fileName = arrFileName[arrFileName.length - 1];

					controlLoadFile(0, 1, fileName);
					
				}, 500);

			}
		}

		var timerId = setInterval(function() {
			getProgress();
		}, 50);

	}

	//Результат проверки загруженного файла
	function controlLoadFile(min, max, fileName) {
		var loadedFileName = document.querySelector('.loaded-file');
		var runNum = Math.floor(Math.random() * (max - min + 1)) + min;
		var controlResult = (runNum === 0 ? 'отклонено' : 'проверено');
		loadedFileName.innerHTML = `Загружен файл <span style='color: #3292f9; font-weight: bold;'>
			"${fileName}"</span><br>Результат проверки файла - ${controlResult}!`;
		addText.innerText = 'Файл успешно загружен';
	}
}