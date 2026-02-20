import { useState } from 'react'
import { getTotalMemory, getFreeMemory, getUserInfo, getCpuArchitecture } from '../api'
import './SystemInfo.css'

function SystemInfo() {
  const [activeTab, setActiveTab] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchSystemInfo = async (type) => {
    setLoading(true)
    setError(null)
    try {
      let response;
      switch(type) {
        case 'total-memory':
          response = await getTotalMemory()
          break
        case 'free-memory':
          response = await getFreeMemory()
          break
        case 'user-info':
          response = await getUserInfo()
          break
        case 'cpu-architecture':
          response = await getCpuArchitecture()
          break
        default:
          break
      }
      setData(response.data)
      setActiveTab(type)
    } catch (err) {
      setError('Failed to fetch system information')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="system-info">
      <div className="system-container">
        <h2 className="system-title">System Information</h2>
        <p className="system-subtitle">Click on any button to view system details</p>
        
        <div className="buttons-grid">
          <button 
            className={`info-button ${activeTab === 'total-memory' ? 'active' : ''}`}
            onClick={() => fetchSystemInfo('total-memory')}
          >
            <span className="button-icon">💾</span>
            <span className="button-text">Total Memory</span>
          </button>
          
          <button 
            className={`info-button ${activeTab === 'free-memory' ? 'active' : ''}`}
            onClick={() => fetchSystemInfo('free-memory')}
          >
            <span className="button-icon">🆓</span>
            <span className="button-text">Free Memory</span>
          </button>
          
          <button 
            className={`info-button ${activeTab === 'user-info' ? 'active' : ''}`}
            onClick={() => fetchSystemInfo('user-info')}
          >
            <span className="button-icon">👤</span>
            <span className="button-text">User Info</span>
          </button>
          
          <button 
            className={`info-button ${activeTab === 'cpu-architecture' ? 'active' : ''}`}
            onClick={() => fetchSystemInfo('cpu-architecture')}
          >
            <span className="button-icon">🖥️</span>
            <span className="button-text">CPU Architecture</span>
          </button>
        </div>

        {loading && <div className="loading">Loading...</div>}
        
        {error && <div className="error-message">{error}</div>}
        
        {data && !loading && (
          <div className="info-display">
            <h3 className="info-title">
              {activeTab === 'total-memory' && 'Total Memory'}
              {activeTab === 'free-memory' && 'Free Memory'}
              {activeTab === 'user-info' && 'User Information'}
              {activeTab === 'cpu-architecture' && 'CPU Architecture'}
            </h3>
            
            <div className="info-content">
              {activeTab === 'total-memory' && (
                <div className="info-item">
                  <p><strong>Total Memory (GB):</strong> {data.totalMemoryGB}</p>
                  <p><strong>Total Memory (MB):</strong> {data.totalMemoryMB}</p>
                  <p><strong>Total Memory (Bytes):</strong> {data.totalMemory?.toLocaleString()}</p>
                </div>
              )}
              
              {activeTab === 'free-memory' && (
                <div className="info-item">
                  <p><strong>Free Memory (GB):</strong> {data.freeMemoryGB}</p>
                  <p><strong>Free Memory (MB):</strong> {data.freeMemoryMB}</p>
                  <p><strong>Free Memory (Bytes):</strong> {data.freeMemory?.toLocaleString()}</p>
                </div>
              )}
              
              {activeTab === 'user-info' && (
                <div className="info-item">
                  <p><strong>Username:</strong> {data.username}</p>
                  <p><strong>User ID (UID):</strong> {data.uid}</p>
                  <p><strong>Group ID (GID):</strong> {data.gid}</p>
                  <p><strong>Home Directory:</strong> {data.homeDir}</p>
                  <p><strong>Shell:</strong> {data.shell}</p>
                </div>
              )}
              
              {activeTab === 'cpu-architecture' && (
                <div className="info-item">
                  <p><strong>Architecture:</strong> {data.architecture}</p>
                  <p><strong>Platform:</strong> {data.platform}</p>
                  <p><strong>CPU Count:</strong> {data.cpuCount}</p>
                  <p><strong>CPU Model:</strong> {data.cpuModel}</p>
                  <p><strong>CPU Speed:</strong> {data.cpuSpeed}</p>
                </div>
              )}
            </div>
            
            <p className="info-timestamp">Last updated: {new Date(data.timestamp).toLocaleString()}</p>
          </div>
        )}
        
        {!data && !loading && !error && (
          <div className="placeholder">
            <p>Select a button above to view system information</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SystemInfo
