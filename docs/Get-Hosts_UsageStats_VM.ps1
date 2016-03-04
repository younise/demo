param($VMhost)
Get-VMhost $vmhost | get-vm | ? { $_.Powerstate -eq "poweredon" } | % {
$VM =$_
$stat =get-stat -entity $vm -maxsamples 1 -intervalmins 5
$cpuusage5mins =($stat | ? { $_.metricID -like "*cpu.usage.average*" } ).Value         
$netusage5mins =($stat | ? { $_.metricID -like "*net.usage.average*" } ).Value
$cpureadysummation5mins =Get-Stat -Entity $vm -Stat cpu.ready.summation -MaxSamples 1 -IntervalMins 5   | select Value 
$memoryusageaverage5mins =($stat | ? { $_.metricID -like "*mem.usage.average*" } ).Value     
$diskusageaverage5mins =($stat | ? { $_.metricID -like "*disk.usage.average*" } ).Value 
$ready = [math]::round((($cpureadysummation5mins).value / 300000 / ($vm | measure-object -Sum NumCPU).Sum *100 ) ,2)
$net = [math]::round(($netusage5mins/1024),2)
$disk = [math]::round(($diskusageaverage5mins/1024),2)

New-Object PSObject | 
			Add-Member -pass NoteProperty Name    				 $VM.Name          |
			Add-Member -pass NoteProperty CPUUsageAverage%  		   $cpuusage5mins  |
			#Add-Member -pass NoteProperty CPUReadySummation 		   ($cpureadysummation5mins).value  |
			Add-Member -pass NoteProperty CPUReady%  		           $ready |
			Add-Member -pass NoteProperty MemUsageAverage%  		   $memoryusageaverage5mins  |
			Add-Member -pass NoteProperty DiskUsageAverage_MBps  		  $disk  |
			Add-Member -pass NoteProperty NetUsage_MBps  		   $net
			}  | sort Name | ft -a 

	