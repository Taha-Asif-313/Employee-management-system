import React from 'react'

const Loading = () => {
  return (
<div class="flex items-center justify-center min-h-screen p-5 w-full">

<div class="flex space-x-2 animate-pulse">
    <div class="w-3 h-3 bg-red-600 rounded-full"></div>
    <div class="w-3 h-3 bg-red-600 rounded-full"></div>
    <div class="w-3 h-3 bg-red-600 rounded-full"></div>
</div>

</div>
  )
}

export default Loading