var begin = '<li>'
var end = '</li>'
var maxlines = 12

function write(msg) {
	var output_window = document.getElementById("console")
	var ulElement = document.getElementById("console-ul")

	var lines = output_window.innerHTML
	var lineList;

	function removeLine(){
	}
	function addLine(msg){
		if (lines > maxlines) {
			removeLine()
		}
		output_window.innerHTML = lines + begin + msg + end
	}
	addLine(msg)
}
