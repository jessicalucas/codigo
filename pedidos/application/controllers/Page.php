<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller {

	function __construct()
    {
        parent::__construct();
        $this->load->model('Modelo', 'banco', TRUE);
		$this->load->helper('url');
     }
		

    public function cadastrar_usuario(){    
        $msg = "";
        $request = array();
        $json = file_get_contents('php://input');
        $request = json_decode($json, true);
        $name = "";
        $email = "";
        $type = '1';
        $password = "";
        if(!empty($request))
        {
            foreach ($request as $key => $val)
            {
                if($key == "name"){
                    $name = $val;
                }else
                if($key == "email"){
                    $email = $val;
                }else
                if($key == "type"){
                    $type = $val;
                }else
                if($key == "password"){
                    $password = password_hash($val, PASSWORD_DEFAULT);
                }else{
                    $msg = "valor enviado invalido";
                }
            }
            $dados = array(
                'name' => $name,
                'email' => $email,
                'password' => $password,
                'type' => '1'
            );
            if($this->db->insert('ls_user', $dados)){
                $insert_id = $this->db->insert_id();
                $msg = $insert_id."|sucesso";
                print_r($msg);exit;
            }else{
                $msg = "Ocorreu algum erro";
            }                
        }
        else{
            $msg = "Erro ao enviar os dados";
        }
        echo $msg;        
    }

	//-------------------------------------------------------

	public function login_ionic(){
		$msg = "";
		// Array da requisição
		$request = array();
		$json = file_get_contents('php://input');
    	$request = json_decode($json, true);
    	$email = "";
		$password = "";
		$type = "";

    	if(!empty($request))
    	{
    		foreach ($request as $key => $val) 
    		{
				if($key == "email"){
		        	$email = $val;
		        }else
		        if($key == "password"){
		        	$password = $val;
		        }else
		        if($key == "type"){
		        	$type = $val;
		        }else{
					$msg = "valor enviado invalido";
				}
		    }
				$retornoLogin = $this->banco->validate_login($email);

				if($retornoLogin){
					foreach($retornoLogin as $ret){

						//if(password_verify($password, $ret->password)){
							$user_id = $ret->id;
							$msg = $ret->type."|".$ret->id."|sucesso";
						//}
						//else{
						//	$msg = "Email ou senha inválidos";
					//	}
					}
				}else{
					$msg = "Email ou senha inválidos";
				}			
		}
		else
		{
		    $msg = "Erro ao enviar os dados";
		}
		echo $msg;
	}
	//----------------------------------------------------------------------------

	public function cadastra_restaurante(){
	
		//$msg = $_POST["name"]." senha ".$_POST["password"];
		$msg = "";
		$request = array();
		$json = file_get_contents('php://input');
    	$request = json_decode($json, true);
    	$resposta = "";
    	$resposta2 = "";
    	if(!empty($request))
    	{
    		foreach ($request as $key => $val) 
    		{
		 
		        if($key == "name"){
		        	$resposta = $val;
		        }
					  if($key == "email"){
		        	$resposta2 = $val;
		        }
		        if($key == "password"){
		        	$resposta2 = $val;
		        }
		        else{
		        	$reposta = "DEU PAU!!!";
		        }
		    }
		}
		else
		{
		    $resposta = "NULL";
		}
		
		$msg = $resposta." ".$resposta2;
		
		
		$response = array
		(
		'retorno'=>'ok',
		'erro'=> 'Nao ocorreu',
		'msg' => $msg
		);
		
		echo json_encode($response);
	}
	
}
	





